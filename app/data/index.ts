import { missionSchema, DeploymentSchema, AlertGroupSchema, AlertCardSchema } from '../schemas';
import moment from 'moment';


//Deployment Data
export const deploymentData: DeploymentSchema[] = [
  { label: "Customer Name", info: "Fullerton" },
  { label: "Timezone", info: "Singapore (UTC+08:00)" },
  { label: "Robot Model", info: "Halo V1 (Outdoor Security Robot)" },
  { label: "Site / Location", info: "One Fullerton" },
  { label: "Report Period", info: "01 Feb 2024 - 27 Feb 2024" },
  { label: "Robot Name", info: "Halo13_One_Fullerton" },
];

//  Mission Data
export const mockMissions: missionSchema[] = [
  {
    id: 1,
    missionName: 'Mission 1',
    missionStartDateTime: moment('2024-01-01T08:00:00Z'),
    missionEndDateTime: moment('2024-01-01T12:00:00Z'),
  },
  {
    id: 2,
    missionName: 'Mission 2',
    missionStartDateTime: moment('2024-01-02T10:00:00Z'),
    missionEndDateTime: moment('2024-01-02T15:00:00Z'),
  },
  {
    id: 3,
    missionName: 'Mission 3',
    missionStartDateTime: moment('2024-01-03T09:00:00Z'),
    missionEndDateTime: moment('2024-01-03T14:00:00Z'),
  },
  {
    id: 4,
    missionName: 'Mission 4',
    missionStartDateTime: moment('2024-01-04T11:00:00Z'),
    missionEndDateTime: moment('2024-01-04T16:00:00Z'),
  },
  {
    id: 5,
    missionName: 'Mission 5',
    missionStartDateTime: moment('2024-01-05T07:00:00Z'),
    missionEndDateTime: moment('2024-01-05T11:00:00Z'),
  },
  {
    id: 6,
    missionName: 'Mission 6',
    missionStartDateTime: moment('2024-01-06T12:00:00Z'),
    missionEndDateTime: moment('2024-01-06T17:00:00Z'),
  },
  {
    id: 7,
    missionName: 'Mission 7',
    missionStartDateTime: moment('2024-01-07T13:00:00Z'),
    missionEndDateTime: moment('2024-01-07T18:00:00Z'),
  },
  {
    id: 8,
    missionName: 'Mission 8',
    missionStartDateTime: moment('2024-01-08T08:00:00Z'),
    missionEndDateTime: moment('2024-01-08T13:00:00Z'),
  },
  {
    id: 9,
    missionName: 'Mission 9',
    missionStartDateTime: moment('2024-01-09T11:00:00Z'),
    missionEndDateTime: moment('2024-01-09T15:00:00Z'),
  },
  {
    id: 10,
    missionName: 'Mission 10',
    missionStartDateTime: moment('2024-01-10T09:00:00Z'),
    missionEndDateTime: moment('2024-01-10T14:00:00Z'),
  },
  {
    id: 11,
    missionName: 'Mission 11',
    missionStartDateTime: moment('2024-01-11T08:00:00Z'),
    missionEndDateTime: moment('2024-01-11T12:00:00Z'),
  },
  {
    id: 12,
    missionName: 'Mission 12',
    missionStartDateTime: moment('2024-01-12T10:00:00Z'),
    missionEndDateTime: moment('2024-01-12T15:00:00Z'),
  },
  {
    id: 13,
    missionName: 'Mission 13',
    missionStartDateTime: moment('2024-01-13T09:00:00Z'),
    missionEndDateTime: moment('2024-01-13T14:00:00Z'),
  },
  {
    id: 14,
    missionName: 'Mission 14',
    missionStartDateTime: moment('2024-01-14T11:00:00Z'),
    missionEndDateTime: moment('2024-01-14T16:00:00Z'),
  },
  {
    id: 15,
    missionName: 'Mission 15',
    missionStartDateTime: moment('2024-01-15T07:00:00Z'),
    missionEndDateTime: moment('2024-01-15T11:00:00Z'),
  },
  {
    id: 16,
    missionName: 'Mission 16',
    missionStartDateTime: moment('2024-01-16T12:00:00Z'),
    missionEndDateTime: moment('2024-01-16T17:00:00Z'),
  },
  {
    id: 17,
    missionName: 'Mission 17',
    missionStartDateTime: moment('2024-01-17T13:00:00Z'),
    missionEndDateTime: moment('2024-01-17T18:00:00Z'),
  },
  {
    id: 18,
    missionName: 'Mission 18',
    missionStartDateTime: moment('2024-01-18T08:00:00Z'),
    missionEndDateTime: moment('2024-01-18T13:00:00Z'),
  },
  {
    id: 19,
    missionName: 'Mission 19',
    missionStartDateTime: moment('2024-01-19T11:00:00Z'),
    missionEndDateTime: moment('2024-01-19T15:00:00Z'),
  },
  {
    id: 20,
    missionName: 'Mission 20',
    missionStartDateTime: moment('2024-01-20T09:00:00Z'),
    missionEndDateTime: moment('2024-01-20T14:00:00Z'),
  },
];

type PerformanceData = {
  label: string
  value: string | number
  unit?: string,
  description: string,
  critical: boolean
}

export const performanceData: Record<string, PerformanceData> = {
  totalTimePatrol: {
    label: 'Total Time Patrolled',
    value: 58,
    unit: 'hr',
    description: 'Missions and tasks outside dock',
    critical: true
  },
  totalDistance: {
    label: 'Total Distance Traveled',
    value: 24,
    unit: 'km',
    description: 'Missions and tasks outside dock',
    critical: true
  },
  totalTasks: {
    label: 'Total Tasks Performed',
    value: 2330,
    description: 'Including Move to, Inspect, Analyze, TTS tasks etc.',
    critical: true
  },
  scheduledMissions: {
    label: 'Scheduled Missions Conducted',
    value: 54,
    description: '',
    critical: false
  },
  adHocMissions: {
    label: 'Ad hoc Missions Conducted',
    value: 12,
    description: '',
    critical: false
  },
  videoAnalyticsAlerts: {
    label: 'Video Analytics Alerts Sent',
    value: 17,
    description: '',
    critical: false
  },
  lifetimeChargingCycle: {
    label: '*Lifetime Charging Cycle',
    value: 138,
    description: '',
    critical: false
  },
  missionsWithIntervention: {
    label: 'Missions with Intervention',
    value: 58,
    description: '',
    critical: false
  },
  missionInterventionRate: {
    label: '**Mission Intervention Rate',
    value: '82%',
    description: '',
    critical: false
  },
  missionsCanceledByClient: {
    label: '*Missions Canceled by Client',
    value: 7,
    description: '',
    critical: false
  },
  missionsCanceledBySupport: {
    label: '*Missions Canceled by Support',
    value: 5,
    description: '',
    critical: false
  },
};

// Alert Data
export const alertGroupItems: AlertGroupSchema[] = [
  {
    location: 'Level 1',
    locationId: 1,
    alerts: [
      {
        id: 1,
        title: 'Suspicious Object Detected',
        time: '12:00 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        title: 'Unauthorized Access Attempt',
        time: '12:30 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
      
    ],
  },
  {
    location: 'Level 2',
    locationId: 2,
    alerts: [
      {
        id: 3,
        title: 'Suspicious Object Detected',
        time: '1:00 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        title: 'Unauthorized Access Attempt',
        time: '1:30 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    location: 'Level 3',
    locationId: 3,
    alerts: [
      {
        id: 5,
        title: 'Suspicious Object Detected',
        time: '2:00 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        title: 'Unauthorized Access Attempt',
        time: '2:30 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    location: 'Level 4',
    locationId: 4,
    alerts: [
      {
        id: 7,
        title: 'Suspicious Object Detected',
        time: '3:00 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
      {
        id: 8,
        title: 'Unauthorized Access Attempt',
        time: '3:30 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    location: 'Level 5',
    locationId: 5,
    alerts: [
      {
        id: 9,
        title: 'Suspicious Object Detected',
        time: '4:00 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
      {
        id: 10,
        title: 'Unauthorized Access Attempt',
        time: '4:30 PM',
        src1: 'https://via.placeholder.com/150',
        src2: 'https://via.placeholder.com/150',
      },
    ],
  },
];

