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
import { faker } from "@faker-js/faker";

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
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6", "7"];

export function Charts({ title }: { title: string }) {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgba(36, 18, 216, 0.62)",
        backgroundColor: "rgba(36, 18, 216, 0.2)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
