//quick custom calendar component
import React from 'react';
import { mockMissions } from '../data';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {tw} from '../../constants';
import SmartBanner from './SmartBanner';


import moment, { Moment } from 'moment';
interface Props {
  year: number;
  month: number;
}

const PDFCalendar: React.FC<Props> = ({ year, month }) => {
  // Get the number of days in January
  const numDays = moment({ year, month: 0 }).daysInMonth();
  const missions = mockMissions;

  // Get the day of the week for January 1st (0 = Sunday, 1 = Monday, etc.)
  const startDayOfWeek = moment({ year, month: 0, day: 1 }).day();

  // Generate an array for the days of the week headers
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  // Generate an array of days from 1 to numDays
  const days = Array.from({ length: numDays }, (_, i) => i + 1);

  return (
    <Page size="A4" style={tw("flex w-full")}>
      <SmartBanner/>
      <View style={tw("flex flex-row w-full")}>
          {daysOfWeek.map(day => (
            <View key={day} style={tw("flex items-center justify-center w-[12%] mx-1 h-10 border border-gray-300")}>
              <Text style={tw("text-gray-200")}>{day[0]}</Text>
            </View>
          ))}
      </View>
        <View style={tw("flex-row flex-wrap w-full")}>
        {/* Add empty divs for the days before January 1st */}
        {Array.from({ length: (startDayOfWeek + 6) % 7 }).map((_, i) => (
          <div key={`empty-${i}`} className="w-24 h-24 m-1 border border-transparent" />
        ))}
        {days.map(day => {
          // Filter missions that start on this day
          const missionsOnThisDay = missions.filter(
            mission =>
              mission.missionStartDateTime.date() === day
          );

          const missionLimit = 3;
          const aboveMissionLimit = missionsOnThisDay.length > missionLimit;

          return (
            <View
              key={day}
              style={tw("relative w-[12%] mx-1 mb-1 h-32 p-2 border border-gray-600")}
            >
            {/* Add empty divs for the days before the start of the month
            {Array.from({ length: (startDayOfWeek + 6) % 7 }).map((_, i) => (
              <View key={`empty-${i}`} style={tw("w-24 h-24 m-1 border border-transparent")} />
            ))} */}
              <Text style={tw("absolute top-1 left-1")}>{day}</Text>
              {/* Display mission information if there are missions on this day */}
              {(missionsOnThisDay.length > 0 && !aboveMissionLimit) && (
                <View style={tw("absolute inset-0 flex flex-col items-center justify-center p-2")}>
                  {missionsOnThisDay.map(mission => (
                    <View
                      key={mission.id}
                      style={tw("p-1 text-sm text-white bg-blue-200 border border-gray-400 rounded")}
                    >
                      <Text>
                      {mission.missionName}
                      </Text>
                      <Text>
                        {mission.missionStartDateTime.format('LT')}  - {mission.missionEndDateTime.format('LT')}
                      </Text>
       
                    </View>
                  ))}
                </View>
              )}
              {aboveMissionLimit && (
                <View
                style={tw("p-1 text-sm text-white bg-blue-200 border border-gray-400 rounded")}
                >
                    <p>
                        {missionsOnThisDay.length - missionLimit} other missions.
                    </p>
              </View>
              )}
            </View>
          );
        })}
        </View>
       
    </Page>
  );
};

export default PDFCalendar;


