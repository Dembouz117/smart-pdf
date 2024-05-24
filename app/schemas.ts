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

export type AlertCardSchema = {
  id: number;
  title: string;
  time: string;
  src1: string;
  src2: string;
}

export type AlertGroupSchema = {
  location: string;
  locationId: number;
  alerts: AlertCardSchema[];
}


export type VaAlertSummaryType = {
  alertImageUrl: string
  detections: number;
}
