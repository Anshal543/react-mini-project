import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData();
    }, [])
    console.log(movie);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }

    return (
        <header className='banner h-[448px] relative object-contain text-white' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}>
            <div className="banner_contents ml-[30px] pt-[140px] h-[190px]">
                <h1 className="banner_title text-3xl font-bold pb-2">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description w-96 pt-4 leading-5 text-lg max-w-[360px] h-[80px]'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner_fadeButton h-[260px] " />
        </header>
    )
}

export default Banner