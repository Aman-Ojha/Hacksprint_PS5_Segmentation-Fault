import React from 'react'
import SearchBar from '../components/SearchBar'
import DummyData from '../variables/dummydata.json'


const HomePage = () => {

    const suggestions = [];
    for (var i=0;i<DummyData["data"].length;i++){
        suggestions.push(DummyData["data"][i]["employee_name"]);
    }

    return(
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h2 className="text-3xl text-white pb-1 font-bold pl-6">
                Request for a new prediction.
            </h2>
            <SearchBar suggestions={suggestions} />
        </div>

    )
        
}

export default HomePage;