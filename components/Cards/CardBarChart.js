import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import CardsTop from "./CardsTop";

export default function CardBarChart({ chartData, stacked }) {
  const [showData, setShowData] = useState(chartData?.daily);
  var Barschart;
  useEffect(() => {
    const { labels, color1, color2, data1, data2, id } = showData;
    let config = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: chartData.data1Name,
            backgroundColor: color1,
            borderColor: color1,
            data: data1,
            fill: false,
            barThickness: chartData.small ? 8 : 22,
          },
          {
            label: chartData.data2Name,
            fill: false,
            backgroundColor: color2,
            borderColor: color2,
            data: data2,
            barThickness: chartData.small ? 8 : 22,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "y",

        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              stacked: stacked,
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              stacked: stacked,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
 
    };
    let ctx = document.getElementById(`bar-chart${id}`).getContext("2d");
    Barschart = new Chart(ctx, config);
  }, [showData]);
  const setDuration = (duration) => {
    if (chartData) {
      const { daily, weekly, monthly } = chartData;
      if (Barschart) {
        Barschart.destroy();
      }
      if (duration === "day's") {
        setShowData(daily);
      } else if (duration === "month's") {
        setShowData(monthly);
      } else if (duration === "week's") {
        setShowData(weekly);
      }
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <CardsTop
            h1={chartData?.type}
            duration={showData?.duration}
            setFunction={setDuration}
            color={showData?.color}
          />
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id={`bar-chart${showData.id}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
