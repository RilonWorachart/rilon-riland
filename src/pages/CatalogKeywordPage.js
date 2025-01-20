import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import ItemCard from '../components/ItemCard'
import SearchKeyButton from '../components/SearchKeyButton'
import { Link, useParams } from 'react-router-dom'


function CatalogKeywordPage() {
  const { key } = useParams();
  const [productData, setProductData] = useState([])


  useEffect(() => {
    fetch('/allproduct.json')
      .then((response) => response.json())
      .then((result) => {
        // If key is empty, set all products, otherwise filter based on the key
        const foundProducts = key
          ? result.filter(item => 
              item.searchword.toLowerCase().includes(key.toLowerCase()) ||
              item.brand.toLowerCase().includes(key.toLowerCase())  ||
              item.category.some(category => category.toLowerCase().includes(key.toLowerCase())) // Check if any category matches the key
            )
          : result;  // if key is empty, return all products
  
        setProductData(foundProducts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [key]);



  return (
    <>
      <div className="min-h-screen font-plex-sans-thai">
        <div className="mt-[70px] bg-[#E2B22C] text-white px-3 xl:px-24 py-3 ">
          <p className="py-1">
            <Link to="/">
              <span className="hover:text-[#00007E]">หน้าแรก</span>
            </Link>
            <span> » </span>
            <span className="">แคตตาล็อกออนไลน์</span>
          </p>
          <h2 className="py-1 text-[20px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h2>
        </div>


        <div className="flex justify-end">
          <SearchKeyButton/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[20px] my-[40px] mx-[80px]">
          {productData.map((item) => {
            return (
              <ItemCard key={item.id} image={item.image} id={item.id} name={item.name} category={item.category}
                description={item.description} searchword={item.searchword} brand={item.brand}
              />
            )
          })}
        </div>


        <CategorySearch />
        <Footer />
      </div>
    </>
  )
}

export default CatalogKeywordPage