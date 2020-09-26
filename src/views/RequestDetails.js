import React, {useState} from 'react'

import sampleData from '../variables/dummydata.json'
import { Line } from "react-chartjs-2";
import { useParams } from 'react-router-dom';
import Axios from 'axios';


const RequestDetails = (props) =>  {

    const {symbol} = useParams();

    const index = sampleData["data"].findIndex(object => object["Symbol"]===symbol)

    const [state,setState] = useState({
        chart1dates: [],
        chart1prices: [],
        chart1data: {},
        chart1options: {},
        chart2data: [],
        chart2options: {},
        currPrice: 0,
        name: sampleData["data"][index]["Name"]
    })
    
    var fetchdata = {}

    Axios.get('http://127.0.0.1:5000/request/'+symbol)
        .then(res=>{
            fetchdata = res.data

            var Chart1Dates = fetchdata["chart1"]["Dates"]
            
            var Chart1Prices = fetchdata["chart1"]["Prices"]
            

            setState({
                chart1dates: Chart1Dates,
                chart1prices: Chart1Prices,
                chart2data: fetchdata["chart2"],
                currPrice: Math.round(fetchdata["Curr_Price"]*100)/100,
                name: sampleData["data"][index]["Name"],
            })
        })
    
     console.log(fetchdata["chart2"])
        
    var color1Data = state.chart2data.slice(0,11);
    // color1Data.push(NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,)
    var color2Data = state.chart2data.slice(10,20);
    color2Data.unshift(NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN);


    const  chart2 = {
        data: canvas => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: ["20 Apr","21 Apr","22 Apr","23 Apr","24 Apr","25 Apr","26 Apr","27 Apr","28 Apr","29 Apr","30 Apr","1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May",],
            datasets: [
              {
                label: "DataSet Values",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 0,
                data: color1Data,
              },
              {
                label: "Predicted Values",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#f76d05",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#f76d05",
                pointBorderColor: "rgba(247, 109, 5, 1)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 0,
                data: color2Data
              }
            ]
          };
        },
        options: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ]
            }
          }
    }


    const chart1 = {
        data: canvas => {
            let ctx = canvas.getContext("2d");
    
            let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
            gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
            gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
            gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); 
    
            return{
                labels: state.chart1dates,
                datasets: [
                    {
                      label: "Axis Bank Average Unit",
                      fill: true,
                      backgroundColor: gradientStroke,
                      borderColor: "#00d6b4",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: "#00d6b4",
                      pointBorderColor: "rgba(255,255,255,0)",
                      pointHoverBackgroundColor: "#00d6b4",
                      pointBorderWidth: 1,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 0,
                      data: state.chart1prices
                    }
                  ]
            };
        },
        options: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            elements: {
              point:{
                  radius: 0
              }
            },
            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    display:false,
                    // drawBorder: false,
                    // color: "rgba(29,140,248,0.0)",
                    // zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                  }
                }
              ],
        
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    display: false,
                    // drawBorder: false,
                    // color: "rgba(0,242,195,0.1)",
                    // zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e"
                  }
                }
              ]
            }
          }
    }

    
    

    return(
        <>
           <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">DETAILED RESULTS OF</h2>
                        <h1 className=" text-4xl font-medium title-font text-white"> {state.name} </h1>
                    </div>
                    
                    <div className="row container">
                        <center>
                            <div class=" md:w-1/2 ">
                                <div class="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                    </div>
                                    <h2 class="text-white text-lg title-font font-medium">Additional Information</h2>
                                </div>
                                <div class="flex-grow">
                                    <h3 className="text-lg text-left  font-semibold leading-tight mt-3 text-gray-100" > {state.name} </h3>
                                    <h6 className="text-sm leading-tight mb-2 text-gray-100 text-left "><span>{symbol} </span>&nbsp;&nbsp;|&nbsp;&nbsp;May 5th 2019</h6>
                                    <div className="flex w-full items-end mb-6">
                                    <span className="block leading-none text-3xl text-gray-100" >  {state.currPrice} </span>
                                    <span className="block leading-5 text-sm ml-4 text-green-500" />
                                    </div>
                                    <div className="flex w-full text-xs">
                                    <div className="flex w-5/12">
                                        <div className="flex-1 pr-3 text-left font-semibold text-gray-100">Open</div>
                                        <div className="flex-1 px-3 text-right text-gray-100">0</div>
                                    </div>
                                    <div className="flex w-7/12">
                                        <div className="flex-1 px-3 text-left font-semibold text-gray-100">Market Cap</div>
                                        <div className="flex-1 pl-3 text-right text-gray-100">0</div>
                                    </div>
                                    </div>
                                    <div className="flex w-full text-xs">
                                    <div className="flex w-5/12">
                                        <div className="flex-1 pr-3 text-left font-semibold text-gray-100">High</div>
                                        <div className="px-3 text-right text-gray-100" >0</div>
                                    </div>
                                    <div className="flex w-7/12">
                                        <div className="flex-1 px-3 text-left font-semibold text-gray-100">P/E ratio</div>
                                        <div className="pl-3 text-right text-gray-100">0</div>
                                    </div>
                                    </div>
                                    <div className="flex w-full text-xs">
                                    <div className="flex w-5/12">
                                        <div className="flex-1 pr-3 text-left font-semibold text-gray-100">Low</div>
                                        <div className="px-3 text-right text-gray-100">0</div>
                                    </div>
                                    <div className="flex w-7/12">
                                        <div className="flex-1 px-3 text-left font-semibold text-gray-100">Dividend yield</div>
                                        <div className="pl-3 text-right text-gray-100">0%</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </center>
                    </div>

                    <div className="row container  mt-8" >
                        <center>
                            <div class=" md:w-full ">
                                <div class="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        </div>
                                        <h2 class="text-white text-lg title-font font-medium">Past Trends</h2>
                                    </div>
                                    <div class="flex-grow">    
                                        <div className="flex w-full  px-5 pb-4 pt-8 bg-gray-800 text-white items-center" style={{ height:"350px" }}>
                                            <Line
                                                data={chart1.data}
                                                options={chart1.options}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                    <div className="row container w-1/2 mt-8">
                        <center>
                            <div class=" md:w-full ">
                                <div class="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                                    <div class="flex items-center mb-3">
                                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        </div>
                                        <h2 class="text-white text-lg title-font font-medium">Forecast</h2>
                                    </div>
                                    <div class="flex-grow">    
                                        <div className="flex w-full  px-5 pb-4 pt-8 bg-gray-800 text-white items-center" style={{ height:"350px" }}>
                                            <Line
                                                data={chart2.data}
                                                options={chart2.options}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                    
                    
                    
                </div>
            </section>

            
            


        </>
    )
        
}

export default RequestDetails;