import React from 'react'
import { Link } from 'react-router-dom'

function CategorySearch() {
  return (
    <>
      <div className="px-[100px]">
        <div>
          <h1 className="pt-2 text-[30px] text-center">
            คำค้นสินค้า
          </h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-[auto] py-10" >
          <Link to={`/catalog/keyword/เครื่องเชื่อมอินวอเตอร์ ยี่ห้อไหนดี`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300 inline-block">เครื่องเชื่อมอินวอเตอร์ ยี่ห้อไหนดี</button>
          </Link>
          <Link to={`/catalog/keyword/ตู้เชื่อมไฟฟ้าราคาถูก`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">ตู้เชื่อมไฟฟ้าราคาถูก</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องเชื่อมไฟฟ้าแบบพกพา`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องเชื่อมไฟฟ้าแบบพกพา</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องเชื่อมทิก ราคาถูก`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องเชื่อมทิก ราคาถูก</button>
          </Link>
          <Link to={`/catalog/keyword/ตู้เชื่อมอาร์กอน ราคาถูก`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">ตู้เชื่อมอาร์กอน ราคาถูก</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องเชื่อมอลูมิเนียม สแตนเลส`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องเชื่อมอลูมิเนียม สแตนเลส</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องเชื่อม mig`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องเชื่อม mig</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องเชื่อมซีโอทู ราคาถูก`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องเชื่อมซีโอทู ราคาถูก</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องเชื่อมCo2 ยี่ห้อไหนดี`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องเชื่อมCo2 ยี่ห้อไหนดี</button>
          </Link>
          <Link to={`/catalog/keyword/เครื่องตัดพลาสม่า ราคาถูก`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">เครื่องตัดพลาสม่า ราคาถูก</button>
          </Link>
          <Link to={`/catalog/keyword/อุปกรณ์งานเชื่อม`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">อุปกรณ์งานเชื่อม</button>
          </Link>
          <Link to={`/catalog/keyword/อะไหล่เครื่องเชื่อม`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">อะไหล่เครื่องเชื่อม</button>
          </Link>
          <Link to={`/catalog/keyword/สายเชื่อมตู้เชื่อม`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">สายเชื่อมตู้เชื่อม</button>
          </Link>
          <Link to={`/catalog/keyword/สายเชื่อมอาร์กอน ราคาถูก`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">สายเชื่อมอาร์กอน ราคาถูก</button>
          </Link>
        </div>
      </div>

      <div className="px-[100px]">
        <div>
          <h1 className="pt-2 text-[30px] text-center">
            ตราสินค้า
          </h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-[auto] py-10" >
          <Link to={`/catalog/keyword/Rilon`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">Rilon</button>
          </Link>
          <Link to={`/catalog/keyword/วรชาติกรุ๊ป`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">วรชาติกรุ๊ป</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategorySearch