import React, {useState} from 'react'

import sampleData from '../variables/sampleData.js'
import { Line } from "react-chartjs-2";
import { useParams } from 'react-router-dom';


const DetailsPage = (props) => {

    const {symbol} = useParams();
    const index = sampleData.findIndex(object => object.symbol===symbol)
    const [state] = useState({
        chart1data: sampleData[index].chart1.data,
        chart1options: sampleData[index].chart1.options,
        chart2data: sampleData[index].chart2.data,
        chart2options: sampleData[index].chart2.options,
        currPrice: sampleData[index].currPrice,
        name: sampleData[index].name
    })
    

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
                                    <h3 className="text-lg text-center  font-semibold leading-tight mt-3 text-gray-100" > {state.name} </h3>
                                    <h6 className="text-sm leading-tight mb-2 text-gray-100 text-center "><span>{symbol} </span>&nbsp;&nbsp;|&nbsp;&nbsp;May 5th 2019</h6>
                                    <div className="flex w-full items-end mb-6">
                                    <span className="block leading-none text-xl text-gray-300">
                                    <span className="block leading-none text-4xl pt-8 pl-10 text-gray-100" >  {state.currPrice} </span>
                                    </span>
                            
                             
                            <span className="text-gray-500" >&nbsp;&nbsp;LCV </span>
                            <span className="block leading-5 text-sm ml-4 text-green-500" />
                            </div>
                            <div className="flex w-full text-xs">
                            
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
                                                data={state.chart1data}
                                                options={state.chart1options}
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
                                                data={state.chart2data}
                                                options={state.chart2options}
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

export default DetailsPage;