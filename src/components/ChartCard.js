import React from 'react'

import { Line } from "react-chartjs-2";



class ChartCard extends React.Component {

    // constructor(props){
    //     super(props)

    // }

    render(){
        return(
            <>
                <div className="rounded shadow-xl overflow-hidden w-full md:flex" style={{height:"330px"}}>
                    <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-gray-800 text-white items-center">
                        <Line
                        data={this.props.data}
                        options={this.props.options}
                        />
                    </div>
                    <div className="flex w-full md:w-1/2 p-10 bg-gray-800 text-gray-600 items-center">
                        <div className="w-full">
                            <h3 className="text-lg font-semibold leading-tight text-gray-100" > {this.props.name} </h3>
                            <h6 className="text-sm leading-tight mb-2 text-gray-100"><span>{this.props.symbol} </span>&nbsp;&nbsp;-&nbsp;&nbsp;May 5th 2019</h6>
                            <div className="flex w-full items-end mb-6">
                            <span className="block leading-none text-3xl text-gray-100" >  {this.props.price} </span>
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
                            <div className="pl-64 ml-24 pt-12">
                                <button className="inline-flex items-center bg-green-500 text-white font-extrabold border-0 py-1 px-3 round focus:outline-none hover:bg-green-700  rounded-lg text-base mt-4 md:mt-0">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </>
        )
    }
}

export default ChartCard