import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function FormPage() {
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
            <span> » </span>
            <Link to="/">
              <span className="hover:text-[#00007E]"></span>
            </Link>
            <span> » ขอรายละเอียดเพิ่มเติม</span>
          </p>
          <h2 className="py-1 text-[20px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h2>
        </div>


        <div className="px-[80px] py-4">
          <div>
            <h1 className="text-[30px]">
              ขอรายละเอียดเพิ่มเติม
            </h1>
            <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C]" />
          </div>

          <p className="text-[28px] pt-[28px]">
              <span>ชื่อสินค้า : </span>
              <span></span>
          </p>

          <div className="my-[10px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
            <div className="text-center">
              <h1 className="text-[30px]">
                กรุณากรอกข้อมูล
              </h1>
              <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C] m-[auto]" />
            </div>
          </div>

        </div>


        <Footer />
      </div>
    </>
  )
}

export default FormPage