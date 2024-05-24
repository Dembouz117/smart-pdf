import moment from 'moment';

export const mockGraphData = [
    { date: moment().subtract(5, 'days'), detections: 2 },
    { date: moment().subtract(4, 'days'), detections: 4 },
    { date: moment().subtract(3, 'days'), detections: 6 },
    { date: moment().subtract(2, 'days'), detections: 8 },
    { date: moment().subtract(1, 'days'), detections: 10 },
    { date: moment(), detections: 5 },
  ];