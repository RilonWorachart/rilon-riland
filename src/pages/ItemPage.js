import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import QRcodeComponent from '../components/QRcodeComponent'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import { FaSearch } from "react-icons/fa";

function ItemPage() {
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

                <div className="mx-[80px] my-[30px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
                </div>



                <div className="mx-[80px] my-[30px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
                    <div>
                        <h1 className="text-[34px]">
                            รายละเอียดสินค้า
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C]" />
                    </div>
                    <div>

                    </div>
                    <QRcodeComponent />
                    <div className="text-center">
                        <p className="py-10 font-bold text-[20px] text-[#E4403C]">สนใจสอบถามรายละเอียดเพิ่มเติมได้ที่</p>
                        <div className="pb-8 text-[17px]">
                            <p>08-1694-5000 , 098-426-6953 </p>
                            <p>095-961-9901 , 089-660-9609</p>
                            <p>094-695-5599</p>
                            <p>081-697-7000 office</p>
                        </div>
                    </div>
                </div>


                <div className="mx-[80px] my-[30px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
                    <div className="pb-4">
                        <h1 className="text-[34px]">
                            ข้อมูลติดต่อ
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C]" />
                    </div>
                    <div className="px-4">
                        <Contact />
                    </div>
                </div>

                <CategorySearch />
                <Footer />
            </div>
        </>
    )
}

export default ItemPage