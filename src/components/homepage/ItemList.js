import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'

function AllProduct() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch('allproduct.json')
    .then((response) => response.json())
    .then((result)=>{
      setProductData(result)
    })
  },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px] my-[40px] mx-[80px]">
      {/* <p>{product[0].name}</p> */}
      {productData.map((item) => {
        return (
          <ItemCard key={item.id} image={item.image} id={item.id} name={item.name} category={item.category}
            description={item.description} searchword={item.searchword} brand={item.brand}
          />
        )
      })}
    </div>
  )
}

export default AllProduct