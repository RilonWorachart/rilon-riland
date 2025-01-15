import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

function CatalogPage() {
  return (
    <>
      <div className="min-h-screen font-plex-sans-thai">
        <Header />

        <div className="mt-[70px] bg-[#E2B22C] text-white px-3 xl:px-24 py-3 ">
          <p className="py-1">
            <Link to="/">
              <span className="hover:text-[#00007E]">หน้าแรก</span>
            </Link>
            <span> » </span>
            <Link to="/">
              <span className="hover:text-[#00007E]">แคตตาล็อกออนไลน์</span>
            </Link>
          </p>
          <h2 className="py-1 text-[20px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h2>
        </div>


        <div className="flex justify-end">
          <form className="flex items-center border-[1px] border-lightgray py-1 px-3 mx-[80px] mt-[30px] rounded-full text-[#6C757D]">
            <input
              type="text"
              placeholder="ค้นหา"
              className="flex-grow p-1 border-none outline-none rounded-l-full"
            />
            <button
              type="submit"
              className="bg-transparent border-none text-[#6C757D]  rounded-r-full"
            >
              <FaSearch />
            </button>
          </form>
        </div>


        <CategorySearch />
        <Footer />
      </div>
    </>
  )
}

export default CatalogPage