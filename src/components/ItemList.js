import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";

function AllProduct() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch('allproduct.json')
      .then((response) => response.json())
      .then((result) => {
        setProductData(result)
      })
  }, [])

  const [itemType, setItemType] = useState("type1")


  return (
    <>
      <div className="mx-[80px] my-[20px] text-[#E2B22C] text-[30px] flex justify-end items-center">
        <CgMenuGridR className="hover:text-[#00009F] mr-1" onClick={() => setItemType("type1")}/>
        <TfiMenuAlt className="hover:text-[#00009F] " onClick={() => setItemType("type2")}/>
      </div>
      <div className={`mb-[40px] mx-[80px] ${itemType === "type2" ? '' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[20px]'} }`}>
        {productData.map((item) => {
          return (
            <ItemCard key={item.id} image={item.image} id={item.id} name={item.name} category={item.category}
              description={item.description} searchword={item.searchword} brand={item.brand}
              itemType={itemType}
            />
          )
        })}
      </div>
    </>
  )
}

export default AllProduct