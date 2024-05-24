import { VaAlertSummaryType } from "../../schemas";

type VaAlertSummaryProps = {
  alerts: VaAlertSummaryType[];
}

export const vaAlertSummaryData: VaAlertSummaryProps = {
    alerts: [
      {
        alertImageUrl: 'https://example.com/image1.jpg',
        detections: 3,
      },
      {
        alertImageUrl: 'https://example.com/image2.jpg',
        detections: 2,
      },
      {
        alertImageUrl: 'https://example.com/image3.jpg',
        detections: 5,
      },
      {
        alertImageUrl: 'https://example.com/image4.jpg',
        detections: 1,
      },
      {
        alertImageUrl: 'https://example.com/image5.jpg',
        detections: 4,
      },
      {
        alertImageUrl: 'https://example.com/image6.jpg',
        detections: 0,
      },
    ]
  };
  