import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTags } from "react-icons/fa";

function ItemCard({ id, image, name, description, searchword, brand }) {

  const [isActive, setIsActive] = useState(false)


  return (
    <div className="shadow-md relative" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      <Link to={`/catalog/${id}`}>
        <div className="bg-black overflow-hidden">
          <img className={`h-[100%] w-[100%] hover:opacity-75 transition-transform duration-300 transform  ${isActive ? 'scale-110 opacity-75' : ''}`} src={`/images/products/${image}`} alt={name} />
        </div>
      </Link>

      <div className="px-5 py-5">
        <div className="pb-[50px]">
          <p className="text-[28px] text-[#E5B22C]">{name}</p>
          <p className="text-[18px] py-2">{brand} </p>

          <div className={`w-full flex items-center 
                transition-all duration-1000 
                ${isActive ? 'max-h-[500px]' : 'max-h-0'}`}>
            <span className={`text-[14px] ${isActive ? 'text-opacity-100 text-[#E5B22C]' : 'max-h-0 text-opacity-0 text-[#E5B22C]'}`}>{description} </span>
          </div>
        </div>

        <div className="absolute bottom-[10px] left-0 right-0 px-4">
          <div className="flex justify-between items-center">
            <Link to={`/catalog/${id}`} className="text-[#E5B22C] py-[2px] flex items-center w-[50%]">
              <FaTags />
              <p className="text-[14px] pl-2">{searchword}</p>
            </Link>
            <Link to={`/catalog/${id}`}>
              <button className="bg-[#E2B22C] border text-white ml-1 py-1 px-4 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">
                ดูรายละเอียด
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard