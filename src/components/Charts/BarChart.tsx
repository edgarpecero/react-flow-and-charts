import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { label: 'January', value: 40 },
  { label: 'February', value: 55 },
  { label: 'March', value: 75 },
];

const BarChartWrapped = () => {
  return (
    <BarChart
      series={[
        {
          data: data.map((d) => d.value),
          label: 'Sales',
        },
      ]}
      width={400}
      height={300}
    />
  );
};

export default BarChartWrapped;
