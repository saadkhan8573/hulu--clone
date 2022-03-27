import React from 'react'
import requests from '../../requests'
import './nav.css'

const Nav = ({ setSelectedOption }) => {
    return (
        <>
            <div className="nav flex px-12 gap-5 md:gap-10 my-3 text-gray-400  text-md font-bold overflow-x-scroll">
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
                <h2 className="cursor-pointer hover:text-white opacity-75 hover:opacity-100 transform hover:scale-110 transition-all" onClick={() => setSelectedOption(requests.fetchTV)}> TV Movie</h2>
            </div>
        </>
    )
}

export default Nav;