import React from 'react'

const Pagination = ({page, previous, next}) => {

      
  return (
       
    <div>
        <div className="flex justify-center mb-">
        <button className="p-2 border  border-indigo-500  text-indigo-500  rounded-l" onClick={previous}>
               Previous</button>

        <button className="p-4 border  border-indigo-500  text-indigo-500 ">
                 {page}</button>

        <button className="p-4  border  border-indigo-500  text-indigo-500  rounded-r" onClick={next}>
                  Next</button>

    </div>
    </div>
  )
}
export default Pagination;