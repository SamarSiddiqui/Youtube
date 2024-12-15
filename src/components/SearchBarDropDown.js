import React from 'react'

const SearchBarDropDown = () => {
  return (
    <div className='w-[35vw] h-32 bg-gray-100 absolute left-[28%] mt-1  rounded-lg shadow-lg'>
        <ul className=' text-left'>
            <li className=' hover:bg-gray-200 cursor-pointer'><i className="  py-3 pr-3 p-3 fa-solid fa-magnifying-glass "></i>Samsung</li>
            <li>BLackberry</li>
            <li>Nokia</li>
            <li>Iphone</li>
        </ul>
      
    </div>
  )
}

export default SearchBarDropDown
