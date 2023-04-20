import React from 'react'

const Favourites = () => {
  return (
    <>
       <h1>Favourite Page</h1>
       <div className="mb-8">
          <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies</div>
            <div className="flex flex-wrap justify-center">
                <div className={`
                      h-[45vh] w-[220px] 
                      bg-center bg-cover
                      rounded-lg flex items-end m-2
                      hover:scale-150
                      ease-out duration-300`}>
                    <div className="w-full bg-opacity-50 bg-gray-900 text-white py-2 font-bold text-center rounded-b-lg">Title </div>
                </div>
            </div>
          </div>
    </>
  
  )
};
export default Favourites;