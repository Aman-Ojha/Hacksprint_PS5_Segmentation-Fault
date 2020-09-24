import React from 'react'

import PreTrainedCharts from '../components/PreTrainedCharts'


const MainLayout = () => {
    return(
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h2 className="text-3xl text-white pb-1">
                PreTrained Models :-
            </h2>
            <PreTrainedCharts />
            
        </div>

    )
        
}

export default MainLayout;