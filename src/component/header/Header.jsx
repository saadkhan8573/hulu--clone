import React from 'react'
import { FlashOn, Home, LiveTv, Person, Search, VideoLibrary } from '@material-ui/icons'
import './header.css'

const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center px-5 h-24 overflow-x-scroll header">
                <div className="flex px-5 md:px-0">
                    <div className="flex flex-col items-center text-white text-xs w-20 mx-auto cursor-pointer header__icon active__header--icon">
                        <Home className="text-white" />
                        <p>Home</p>
                    </div>
                    <div className="flex flex-col items-center text-white text-xs w-20 mx-auto cursor-pointer header__icon">
                        <FlashOn />
                        <p>Trending</p>
                    </div>
                    <div className="flex flex-col items-center text-white text-xs w-20 mx-auto cursor-pointer header__icon">
                        <LiveTv />
                        <p>Verified</p>
                    </div>
                    <div className="flex flex-col items-center text-white text-xs w-20 mx-auto cursor-pointer header__icon">
                        <VideoLibrary />
                        <p>Collections</p>
                    </div>
                    <div className="flex flex-col items-center text-white text-xs w-20 mx-auto cursor-pointer header__icon">
                        <Search />
                        <p>Search</p>
                    </div>
                    <div className="flex flex-col items-center text-white text-xs w-20 mx-auto cursor-pointer header__icon">
                        <Person />
                        <p>Account</p>
                    </div>
                </div>
                <img className="h-5 mr-0 md:mr-7 cursor-pointer" src="./images/Hulo Logo.png" alt="Hulu Logo" />
            </div>
        </>
    )
}

export default Header
