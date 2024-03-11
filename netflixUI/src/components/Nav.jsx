import React from 'react'
import { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])


    return (
        <div className={`nav ${show && "bg-black"} fixed top-0 p-[20px] w-[100%] h-[30px] z-10 ease-in transition-all duration-500`}
        >
            <div className="nav_contents flex justify-between">

                <img
                    className='nav_logo fixed left-0 top-0 w-[90px] cursor-pointer pl-[20px] object-contain' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
                <img
                    className='nav_avatar fixed right-5 top-[10px] w-[22px] cursor-pointer' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" alt="" />

            </div>
        </div>
    )
}

export default Nav