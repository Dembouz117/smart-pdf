import { VaAlertSummaryType } from "../../schemas";

type VaAlertSummaryProps = {
  alerts: VaAlertSummaryType[];
}

export const vaAlertSummaryData: VaAlertSummaryProps = {
    alerts: [
      {
        alertImageUrl: './public/example.png',
        detections: 3,
      },
      {
        alertImageUrl: './public/example.png',
        detections: 2,
      },
      {
        alertImageUrl: './public/example.png',
        detections: 5,
      },
      {
        alertImageUrl: './public/example.png',
        detections: 1,
      },
      {
        alertImageUrl: './public/example.png',
        detections: 4,
      },
      {
        alertImageUrl: './public/example.png',
        detections: 0,
      },
    ]
  };
  