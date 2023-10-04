import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="w-96 border-2 border-gray-200 shadow-md h-[470px] rounded-2xl p-4 bg-white ml-12">
      <h1 className="font-base text-xl font-semibold text-orange-500">
        Total Revenue
      </h1>

      {/* <Pie data={data} options={options} /> */}
      <Doughnut data={data} />
    </div>
  );
};

export default PieChart;
