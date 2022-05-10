import React from 'react'
import "./Graph.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false,
    },
  },
};


const Graph = ({ data }) => {
  const data1 = {
    labels: [
      "Warmth","Reasoning","Emotional Stability","Dominance","Liveliness","Rule Conciousness","Social Boldness","Sensitivity",
      "Vigilance","Abstractedness","Privateness","Apprehension","Openness to change","Self Reliance","Perfectionism","Tension"],
    datasets: [
      {
        label: data.Name,
        data: [data.Warmth, data.Reasoning, data.Emotional_Stability, data.Dominance, data.Liveliness, data.Rule_Conciousness,
        data.Social_Boldness, data.Sensitivity, data.Vigilance, data.Abstractedness, data.Privateness, data.Apprehension,
        data.Openness_to_change, data.Self_Reliance, data.Emotional_Stability, data.Perfectionism, data.Tension
        ],
        backgroundColor: 'rgba(234, 20, 66, 0.97)',
      },
      {
        label: "Ideal",
        data: [4, 0, 4, 4, 0, 4, 4, 0, 0, 0, 4, 0, 4, 4, 4, 0],
        backgroundColor: 'rgba(42, 19, 221, 0.97)',
      }
    ],
  };
  return (
    <div className='block'>
      <Bar options = {options} data={data1} />;
    </div>
  );
}

export default Graph