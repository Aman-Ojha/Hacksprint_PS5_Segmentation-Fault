import React from 'react'
import SearchBar from '../components/SearchBar'



const HomePage = () => {

    

    return(
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h2 className="text-3xl text-white pb-1 font-bold pl-6">
                Request for a new prediction.
            </h2>
            <SearchBar />
        </div>

    )
        
}

export default HomePage;