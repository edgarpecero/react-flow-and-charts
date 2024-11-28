import { LineChart } from '@mui/x-charts/LineChart';

const data = [
  { x: 1, y: 5 },
  { x: 2, y: 15 },
  { x: 3, y: 25 },
  { x: 4, y: 10 },
];

const LineChartWrapped = () => {
  return (
    <LineChart
    series={[
        {
          data: data.map((d) => d.y),
          label: 'Growth',
        },
      ]}
      width={400}
      height={300}
    />
  );
};

export default LineChartWrapped;
