import React from "react";

import ChartCard from './ChartCard'

import {
  chartExample4,
  chartExample2
} from "../variables/charts.js";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-700"
                    : "text-white bg-gray-800")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Banking
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-700"
                    : "text-white bg-gray-800")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Steel and Manufacturing
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-700"
                    : "text-white bg-gray-800")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Automotive
              </a>
            </li>
          </ul>
          
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded-lg ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                  <center>
                    <div className="row pt-1 pb-3"> 
                        <ChartCard data={chartExample4.data} options={chartExample4.options} />
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={chartExample2.data} options={chartExample2.options} />
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={chartExample4.data} options={chartExample4.options} />
                    </div>
                  </center>
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                  <center>
                    <div className="row pt-1 pb-3"> 
                        <ChartCard data={chartExample2.data} options={chartExample2.options} />
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={chartExample4.data} options={chartExample4.options} />
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={chartExample2.data} options={chartExample4.options} />
                    </div>
                  </center>

                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <center>
                      <div className="row pt-1 pb-3"> 
                          <ChartCard data={chartExample4.data} options={chartExample4.options} />
                      </div>
                      <div className="row py-3"> 
                          <ChartCard data={chartExample2.data} options={chartExample2.options} />
                      </div>
                      <div className="row py-3"> 
                          <ChartCard data={chartExample4.data} options={chartExample4.options} />
                      </div>
                    </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function PreTrainedCharts() {
  return (
    <>
      <div className="container">
        <Tabs color="blue" />
      </div>
      
    </>
  );
}