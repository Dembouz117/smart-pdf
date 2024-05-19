//quick custom calendar component
import React from 'react';
import { mockMissions } from '../data';

interface Props {
  year: number;
}

const Calendar: React.FC<Props> = ({ year }) => {
  // MOCK FOR ONE MONTH FIRST
  // TODO: Populate calendar dynamically from mock data
  // Get the number of days in January
  const numDays = new Date(year, 1, 0).getDate();
  const missions = mockMissions

  // Generate an array of days from 1 to numDays
  const days = Array.from({ length: numDays }, (_, i) => i + 1);

  return (
    <div className="flex justify-center w-full">
        <div className="flex flex-wrap w-3/4 bg-red-200">
        {days.map(day => {
          // Filter missions that start on this day
          const missionsOnThisDay = missions.filter(
            mission =>
              mission.missionStartDateTime.day() === day
          );

          const missionLimit = 3;
          const aboveMissionLimit = missionsOnThisDay.length > missionLimit;

          return (
            <div
              key={day}
              className="relative w-32 h-32 p-2 m-1 border border-gray-600"
            >
              <span className="absolute top-1 left-1">{day}</span>
              {/* Display mission information if there are missions on this day */}
              {(missionsOnThisDay.length > 0 && !aboveMissionLimit) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  {missionsOnThisDay.map(mission => (
                    <div
                      key={mission.id}
                      className="p-1 text-sm text-white bg-blue-200 border border-gray-400 rounded"
                    >
                      <p>
                      {mission.missionName}
                      </p>
                      <p>
                        {mission.missionStartDateTime.format()} - {mission.missionEndDateTime.format()}
                      </p>
       
                    </div>
                  ))}
                </div>
              )}
              {aboveMissionLimit && (
                <div
                className="p-1 text-sm text-white bg-blue-200 border border-gray-400 rounded"
                >
                    <p>
                        {missionsOnThisDay.length - missionLimit} other missions.
                    </p>
              </div>
              )}
            </div>
          );
        })}
        </div>
       
    </div>
  );
};

export default Calendar;


