import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CChart } from "@coreui/react-chartjs";
const Chart = () => {
  return (
    <div className="w-[700px] h-[470px] p-4 border-2 border-gray-200 bg-white rounded-2xl shadow-md">
        <h1 className="font-base text-xl font-semibold text-orange-500">Total Revenue</h1>
        <div className="font-bold text-2xl">2,508 Rs</div>
      <CChart
        type="bar"
        border
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Transaction ",
              backgroundColor: "#FFC029",
              data: [40, 20, 12, 39, 87, 40, 39, 80, 40],
            },
          ],
        }}
        labels="months"
        options={{
          plugins: {
            legend: {
              labels: {
                color: "green",
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: "red",
              },
              ticks: {
                color: "blue",
              },
            },
            y: {
              grid: {
                color: "gray",
              },
              ticks: {
                color: "orange",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
