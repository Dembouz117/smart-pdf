import { VaAlertSummaryType } from "../../schemas";

type VaAlertSummaryProps = {
  alerts: VaAlertSummaryType[];
}

export const vaAlertSummaryData: VaAlertSummaryProps = {
    alerts: [
      {
        alertImageUrl: 'example.png',
        detections: 3,
      },
      {
        alertImageUrl: 'example.png',
        detections: 2,
      },
      {
        alertImageUrl: 'example.png',
        detections: 5,
      },
      {
        alertImageUrl: 'example.png',
        detections: 1,
      },
      {
        alertImageUrl: 'example.png',
        detections: 4,
      },
      {
        alertImageUrl: 'example.png',
        detections: 0,
      },
    ]
  };
  