import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import CardsTop from "./CardsTop";
import { AiOutlineArrowUp } from "react-icons/ai";
// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";



export default function TransactionTable({ color, data }) {

  const [tableData, setTableData] = useState(data.daily);
  const setDuration = (duration) => {
    if (data) {
      const { daily, weekly, monthly } = data;
      if (duration === "day's") {
        setTableData(daily);
      } else if (duration === "month's") {
        setTableData(monthly);
      } else if (duration === "week's") {
        setTableData(weekly);
      }
    }
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <CardsTop
            h1={data.heading}
            duration={tableData?.duration}
            setFunction={setDuration}
            color={tableData?.color}
            dark={color === "dark"}
          />
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {data?.th?.map((h, i) => (
                  <th
                    key={i}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.list.map((stock, i) => {
                const {
                  img,
                  name,
                  data1,
                  type,
                  data3,
                  volume,
                  status,
                  data4,
                  data5,
                } = stock;
                return (
                  <tr
                    key={i}
                    onClick={() => {
                      Router.push("/stocks/virat");
                    }}
                    className={
                      color === "light" ? "h-bg-grey-100" : "h-bg-grey-900"
                    }
                  >
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={img}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      &#8377;{data1}
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      style={{ color: type[1], borderColor: type[0] }}
                    >
                      {type[0]}
                    </td>

                    {volume && (
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {volume}k
                      </td>
                    )}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data3}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        className="change-data-btn"
                        style={{ color: status[1], borderColor: status[1] }}
                      >
                        {status[0]}
                      </button>
                    </td>
                    {data4 && (
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {data4}
                      </td>
                    )}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data5}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button className="view-more-btn">
          {" "}
          <AiOutlineArrowUp />
          view more
        </button>
      </div>
    </>
  );
}

TransactionTable.defaultProps = {
  color: "light",
};

TransactionTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
