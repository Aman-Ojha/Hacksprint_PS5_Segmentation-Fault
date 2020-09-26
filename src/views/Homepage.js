import React from 'react'
import Img1 from '../assets/img/homepage.svg'
import Img2 from '../assets/img/Karan.jpg'
import Img3 from '../assets/img/arshit.jpg'
 import Img4 from '../assets/img/aman.jpg'
import Img5 from '../assets/img/shobit.jpg'





const HomePage = () => {
    return(
        <>
            <section className="text-gray-500 body-font bg-gray-900">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">We know the stonks, You'll know them too!!</h1>
                    <p className="leading-relaxed text-base">We've all heard it, only those striving to fail tread unknown waters and make no efforts to actually know more about the lay of the land before erecting their home. Is stock investing any different? Be a hero, get to know your stonks and gain the wealth you've only dreamt about!</p>
                    <a className="text-blue-500 inline-flex items-center mt-4" href="/">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">&nbsp;</h2>
                        <div className="bg-gray-700 p-20 rounded-full">
                            <img src={Img1} alt="homepage" style={{ width: "90%" }}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-500 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4 ml-24">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Img2} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-white">Karan Nandwani</h2>
                            <h3 className="text-gray-600 mb-3">Leader , ML and Data</h3>
                            <a className="mb-4 text-blue-400" href="https://www.linkedin.com/in/karan-nandwani-16aa66176/">LinkedIN</a>
                            <span className="inline-flex">
                            <a className="text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Img3} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-white">Arshit Kumar</h2>
                            <h3 className="text-gray-600 mb-3">Data and ML</h3>
                            <a className="mb-4 text-blue-400" href="https://www.linkedin.com/in/arshit-kumar-477850177/">LinkedIN</a>
                            <span className="inline-flex">
                            <a className="text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Img4} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-white">Aman Ojha</h2>
                            <h3 className="text-gray-600 mb-3">Data and ML</h3>
                            <a className="mb-4 text-blue-400" href="https://www.linkedin.com/in/aman-ojha-2a0767191/">LinkedIN</a>
                            <span className="inline-flex">
                            <a className="text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Img5} />
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-white">Shobit Puri</h2>
                            <h3 className="text-gray-600 mb-3">Web Dev</h3>
                            
                            <a className="mb-4 text-blue-400" href="https://www.linkedin.com/in/shobit-puri-3b30bb18b/">LinkedIN</a>
                            <span className="inline-flex">
                            <a className="text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-2 text-gray-700" href="/home">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
        
}

export default HomePage;