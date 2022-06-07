import React from "react";

const CardsTop = ({ h1, duration, setFunction, color, dark }) => {
  console.log({ h1,dark });
  return (
    <div className="flex flex-wrap items-center">
      <div className="relative w-full max-w-full flex-grow flex-1">
        <h2
          className={
            !dark 
              ? "text-blueGray-700 text-xl font-semibold "
              : "text-white text-xl font-semibold "
          }
        >
          {h1}
        </h2>
        <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
          for last 7 {duration}
        </h6>
      </div>
      <div className="btns-container">
        <button
          className="change-data-btn"
          style={
            duration === "day's"
              ? { color, borderColor: color, fontWeight: "bold" }
              : {}
          }
          onClick={() => setFunction("day's")}
        >
          daily
        </button>
        <button
          className="change-data-btn"
          style={
            duration === "week's"
              ? { color, borderColor: color, fontWeight: "bold" }
              : {}
          }
          onClick={() => setFunction("week's")}
        >
          weekly
        </button>
        <button
          className="change-data-btn"
          style={
            duration === "month's"
              ? { color, borderColor: color, fontWeight: "bold" }
              : {}
          }
          onClick={() => setFunction("month's")}
        >
          monthly
        </button>
      </div>
    </div>
  );
};

export default CardsTop;
