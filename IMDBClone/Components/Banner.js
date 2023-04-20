import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const Banner = () => {

  const[movie, setMovie]=useState([])

  useEffect(function(){

  axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=03056f9e2e643ba4493005b6bf65ea06&language=hi-IN")
  .then((res) => setMovie(res.data.results[1]))

  })

  return (
     <div>
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})]
                         h-[80vh]  bg-center bg-cover  flex items-end `}>
           <div className=" text-xl  text-white  p-4  bg-gray-900 bg-opacity-50  w-full flex justify-center ">
                 {movie.title}
           </div>
        </div>
      
    </div>
  )
}
export default Banner;
