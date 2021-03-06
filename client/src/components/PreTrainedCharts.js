import React from "react";

import ChartCard from './ChartCard'

import{
  AxisBankChart,
  AxisCurrPrice
} from '../variables/AxisTrainedCharts.js'
import{
  ICICIBankChart,
  ICICICurrPrice
} from '../variables/ICICITrainedChart.js'
import{
  KotakBankChart,
  KotakCurrPrice
} from '../variables/KotakTrainedChart.js'
import{
  JindalBankChart,
  JindalCurrPrice
} from '../variables/JindalTrainedChart.js'
import{
  JSWBankChart,
  JSWCurrPrice
} from '../variables/JSWTrainedChart.js'
import{
  TATASTEELChart,
  TATASTEELCurrPrice
} from '../variables/TATASTEELTrainedChart.js'
import{
  JMTSTEELChart,
  JMTCurrPrice
} from '../variables/JMTTrainedChart.js'
import{
  MarutiChart,
  MarutiCurrPrice
} from '../variables/MarutiTrainedChart.js'
import{
  TATAMOTORSChart,
  TATAMOTORSCurrPrice
} from '../variables/TATAMOTORSTrainedChart.js'







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
                        <ChartCard data={AxisBankChart.data} options={AxisBankChart.options} name="Axis Bank" symbol="AXISBANK" price={AxisCurrPrice} />
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={ICICIBankChart.data} options={ICICIBankChart.options} name="ICICI Bank" symbol="ICICIBANK" price={ICICICurrPrice} />
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={KotakBankChart.data} options={KotakBankChart.options} name="Kotak Mahindra Bank" symbol="KOTAKBANK" price={KotakCurrPrice} />
                    </div>
                  </center>
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                  <center>
                    <div className="row pt-1 pb-3"> 
                        <ChartCard data={JindalBankChart.data} options={JindalBankChart.options} name="Jindal Steel and Power" symbol="JINDALSTEL" price={JindalCurrPrice}/>
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={JSWBankChart.data} options={JSWBankChart.options} name="JSW Steel" symbol="JSWSTEEL" price={JSWCurrPrice}/>
                    </div>
                    <div className="row py-3"> 
                        <ChartCard data={TATASTEELChart.data} options={TATASTEELChart.options} name="Tata Steel Ltd." symbol="TATASTEEL" price={TATASTEELCurrPrice}/>
                    </div>
                  </center>

                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <center>
                      <div className="row pt-1 pb-3"> 
                          <ChartCard data={JMTSTEELChart.data} options={JMTSTEELChart.options} name="Jmt Auto" symbol="JMTAUTOLTD"  price={JMTCurrPrice} />
                      </div>
                      <div className="row py-3"> 
                          <ChartCard data={MarutiChart.data} options={MarutiChart.options} name="Maruti Suzuki" symbol="MARUTI" price={MarutiCurrPrice} />
                      </div>
                      <div className="row py-3"> 
                          <ChartCard data={TATAMOTORSChart.data} options={TATAMOTORSChart.options} name="Tata Motors" symbol="TATAMOTORS" price={TATAMOTORSCurrPrice} />
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