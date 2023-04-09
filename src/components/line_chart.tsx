import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        color: "#777777",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export type DataSet = {
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

type LineChartProps = {
  labels: string[];
  datasets: DataSet[];
};

const LineChart: React.FC<LineChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  return (
    <div className="w-full h-full bg-dark-600 py-3 px-5 grid place-content-center">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
