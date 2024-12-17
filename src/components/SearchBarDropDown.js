import React from 'react'

const SearchBarDropDown = ({listData}) => {
    
  return (
    <div className='w-[35vw]  bg-gray-100 absolute left-[28%]    rounded-lg shadow-lg'>
        <ul className=' text-left'>
            {
                listData.map((list)=> <li key={list} className=' hover:bg-gray-200 '><i className="  py-3 pr-3 p-3 fa-solid fa-magnifying-glass "></i>{list}</li>)
            }
           
        </ul>
      
    </div>
  )
}

export default SearchBarDropDown
