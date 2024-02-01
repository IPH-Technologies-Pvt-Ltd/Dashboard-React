import React, { useState } from "react";
import { cardData } from "../data/cardData";
import { trafficData } from "../data/trafficData";
import "../Styles/Dashboard.css";
import * as AiIcons from "react-icons/ai";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
} from "recharts";
import { lineGraphData, pieGraphData } from "../data/graphData";
import OrderTable from "./OrderTable";
import Header from "./Header";

const Dashboard = ({ toggle, handleToggle }) => {
  const [search, setSearch] = useState("");
  const COLORS = ["#0088FE", "#DD3C59", "#00C8C8"];

  const Search = (term) => {
    setSearch(term);
  };
  return (
    <>
      <Header toggle={toggle} handleToggle={handleToggle} onSearch={Search} />
      <div className="container-fluid px-4 dashboard-bg">
        <div className="row g-4 my-0 ">
          {cardData.map((item, index) => {
            return (
              <div className="col-md-3 pt-3" key={index}>
                <div
                  className={`p-3 py-4 status-cards rounded-top-3 shadow-sm d-flex justify-content-between align-items-center`}
                >
                  <div className="">
                    <h5 className={`text-${item.color} fw-bold mb-0`}>
                      {item.title}
                    </h5>
                    <p className="mb-0" style={{ fontWeight: 600 }}>
                      {item.text}
                    </p>
                  </div>
                  <img src={item.logo} alt="logo" height={30} />
                </div>
                <div
                  className={`d-flex justify-content-between align-items-center bg-${item.color} p-2 text-light rounded-bottom-3 `}
                >
                  {item.cardFoot}
                  {item.outline}
                </div>
              </div>
            );
          })}
        </div>
        <div className="graphBlock row row-col-md-4 g-4 my-0">
          <div className="col-md-4">
            <ResponsiveContainer
              width="100%"
              height={200}
              className="bg-primary rounded-top-3"
            >
              <div className="d-flex justify-content-between align-items-center px-4">
                <small className="text-light fw-bold">Scale per day</small>

                <small className="text-light fw-bold mb-0">
                  -3% <AiIcons.AiOutlineFall className="fs-6" />
                </small>
              </div>
              <LineChart
                width={600}
                height={200}
                data={lineGraphData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 40,
                }}
              >
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="graphFooter status-cards d-flex justify-content-around align-items-center rounded-bottom-3 shadow-sm pt-2">
              <div>
                <p className="mb-0 fw-bold text-center">$4320</p>
                <p className="text-center">
                  <small>Total Revenue</small>
                </p>
              </div>
              <div>
                <p className="mb-0 fw-bold text-center">321</p>
                <p className="text-center">
                  <small>Total Sales</small>
                </p>
              </div>
            </div>
            <div className="status-cards d-flex justify-content-around align-items-center rounded-3 shadow-sm mt-3">
              <p
                className="mb-0 py-3"
                style={{ fontWeight: 600, fontSize: "12px" }}
              >
                REALITY
              </p>
              <p
                className="mb-0 py-3"
                style={{ fontWeight: 800, color: "red" }}
              >
                -0.99
              </p>
              <p
                className="mb-0 py-3"
                style={{ fontWeight: 600, fontSize: "12px" }}
              >
                INFRA
              </p>
              <p
                className="mb-0 py-3"
                style={{ fontWeight: 800, color: "limegreen" }}
              >
                -7.66
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card status-cards">
              <h6 className="card-header fw-bold">Total Revenue</h6>

              <ResponsiveContainer width="100%" height={226}>
                <PieChart width="100%">
                  <Pie
                    dataKey="value"
                    data={pieGraphData}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={40}
                    fill="#8884d8"
                  >
                    {pieGraphData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    formatter={(value) => (
                      <span
                        className="status-cards"
                        style={{
                          fontSize: 12,
                          textAlign: "start",
                          fontWeight: 600,
                        }}
                      >
                        {value}
                      </span>
                    )}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="card-footer d-flex justify-content-around align-items-center">
                <div>
                  <p className="mb-0 fw-bold">
                    <small>YouTube</small>
                  </p>
                  <p className="mb-0 text-primary fw-bold">
                    <small>+16.85%</small>
                  </p>
                </div>
                <div>
                  <p className="mb-0 fw-bold">
                    <small>Facebook</small>
                  </p>
                  <p className="mb-0 text-info fw-bold">
                    <small>+45.36%</small>
                  </p>
                </div>
                <div>
                  <p className="mb-0 fw-bold">
                    <small>Twitter</small>
                  </p>
                  <p className="mb-0 text-warning fw-bold">
                    <small>+50.89%</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card status-cards">
              <h6 className="card-header fw-bold">Traffic Sources</h6>
              <div className="card-body">
                {trafficData.map((item, index) => {
                  return (
                    <>
                      <div
                        className="d-flex justify-content-between align-items-center"
                        key={index}
                      >
                        <p
                          className="mb-0"
                          style={{ fontWeight: 600, fontSize: "13px" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="mb-0"
                          style={{ fontWeight: 600, fontSize: "13px" }}
                        >
                          {item.percentage}%
                        </p>
                      </div>
                      <div
                        className="progress"
                        style={{ marginBottom: "26.3px" }}
                      >
                        <div
                          className={`progress-bar bg-${item.color} `}
                          role="progressbar"
                          aria-label="Basic example"
                          style={{
                            width: `${item.percentage}%`,
                          }}
                          aria-valuenow={item.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <OrderTable searchTerm={search} />
      </div>
    </>
  );
};

export default Dashboard;
