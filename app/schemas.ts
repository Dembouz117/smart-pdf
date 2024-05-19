import moment, { Moment } from 'moment';
export interface missionSchema {
    id: number;
    missionName: string;
    missionStartDateTime: Moment;
    missionEndDateTime: Moment;
}

export type PerformanceData = {
    label: string
    value: string | number
    unit?: string,
    description: string,
    critical: boolean
  }


export type DeploymentSchema = {
    label: string;
    info: string;
  };