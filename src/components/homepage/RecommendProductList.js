import { useState, useEffect } from 'react'
import RecommendProductCard from './RecommendProductCard'

function RecommendProductList() {
  const [recommendProductData, setRecommendProductData] = useState([])

  useEffect(() => {
    fetch('recommendproduct.json')
      .then((response) => response.json())
      .then((result) => {
        setRecommendProductData(result)
        console.log(recommendProductData)
      })
  }, [])


  return (
    <div className="pb-10">
      <div>
        <h1 className="pt-2 text-[30px] text-center">
          สินค้าขายดี
        </h1>
        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
      </div>
      <div className="py-10">
        {recommendProductData.map((item) => {
          return (
            <RecommendProductCard key={item.id} image={item.image} id={item.id} name={item.name} />
          )
        })
        }
      </div>
    </div>
  )
}

export default RecommendProductList