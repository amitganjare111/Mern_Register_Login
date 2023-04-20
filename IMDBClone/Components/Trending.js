import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import { RotatingLines} from  'react-loader-spinner'
import Pagination from './Pagination';

const Trending = () => {

  const[movies, setMovies]=useState([])
  const [page, setPage]=useState(1);
       
      const previous = () => {
         if(page>1)
         setPage(page-1);
      }
      const next = () => {
         setPage(page+1)
      }

  useEffect(function(){

  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=03056f9e2e643ba4493005b6bf65ea06&region=IN&language=hi-IN&with_origin_country=IN&page=${page}`)
  .then((res) => setMovies(res.data.results))

  },[page])

  return (
   <div>
          <div className="mt-3 mb-8 font-bold text-2xl text-center bg-black text-white">Trending Movies</div>
          {
            movies.length===0 ?
            <div className='flex justify-center'>
          
            <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}>
            </RotatingLines> </div> :
            
            <div className="flex flex-wrap justify-center bg-black">
              {
              movies.map((list)=>

              <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${list.backdrop_path})]
                      h-[50vh] w-[220px] 
                      bg-center bg-cover
                      rounded-lg flex items-end m-1
                      hover:scale-150
                      ease-out duration-300`}>
                    
                    <div className="w-full bg-opacity-50 bg-gray-900 text-white py-2 font-bold text-center rounded-b-lg">{list.title}
                    <div> Rating={ list.vote_average} </div>
                    </div>
               </div>

               )
              }  
            </div>
          }
       
       <Pagination page={page} previous={previous} next={next} />

   </div>
  )
}
export default Trending;