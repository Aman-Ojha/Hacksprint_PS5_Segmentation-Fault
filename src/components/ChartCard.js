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
                        <h3 className="text-lg font-semibold leading-tight text-gray-100" >SW Limited.</h3>
                        <h6 className="text-sm leading-tight mb-2 text-gray-100"><span>ASX:SFW </span>&nbsp;&nbsp;-&nbsp;&nbsp;Aug 2nd 4:00pm AEST</h6>
                        <div className="flex w-full items-end mb-6">
                        <span className="block leading-none text-3xl text-gray-100" >0</span>
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
            </>
        )
    }
}

export default ChartCard