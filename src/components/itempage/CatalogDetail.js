import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import QRcodeComponent from '../QRcodeComponent'
import { FaFacebook, FaWhatsapp, FaLine, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function CatalogDetail() {
    const { id } = useParams();
    const [productData, setProductData] = useState([])


    useEffect(() => {
        fetch('/allproduct.json')
            .then((response) => response.json())
            .then((result) => {
                const foundProduct = result.find(item => item.id === parseInt(id));
                setProductData(foundProduct)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);




    return (
        <>
            <div className="mt-[70px] bg-[#E2B22C] text-white px-3 xl:px-24 py-3 md:flex md:justify-between md:items-center">
                <p className="py-1">
                    <Link to="/">
                        <span className="hover:text-[#00007E]">หน้าแรก</span>
                    </Link>
                    <span> » </span>
                    <Link to="/">
                        <span className="hover:text-[#00007E]">แคตตาล็อกออนไลน์</span>
                    </Link>
                    <span> » </span>
                    <span className="">{productData.name}</span>
                </p>
                <h2 className="py-1 text-[20px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h2>
            </div>

            <div className="flex justify-end mx-[10%] max-w-[1400px] 2xl:mx-[auto]">
                <form className="flex items-center border-[1px] border-lightgray py-1 px-3 mt-[30px] rounded-full text-[#6C757D]">
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

            <div className="mx-[10%] max-w-[1400px] 2xl:mx-[auto] my-[30px] px-[15px] py-[15px] border-[1px] border-lightgray rounded-md lg:flex">
                <img className=" w-[100%] lg:w-[30%] border rounded-md lg:mr-[40px]" src={`/images/products/${productData.image}`} alt={productData.name} />
                <div className="lg:w-[70%]">
                    <p className="text-[32px] pt-4">{productData.name}</p>
                    <p className="py-1">
                        <span>ตราสินค้า : </span>
                        <span className="text-[#E2B22C]">{productData.brand}</span>
                    </p>
                    <hr></hr>
                    <div className="flex py-6">
                        <Link to={`/catalog/${id}/request-form`}>
                            <button className="bg-[#E2B22C] border text-white py-2 px-6 mr-4 hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300 inline-block">ขอรายละเอียด</button>
                        </Link>
                        <Link to={`/catalog/${id}/request-form`}>
                            <button className="bg-[#E2B22C] border text-white py-2 px-6 hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300 inline-block">ขอไปเสนอราคา</button>
                        </Link>
                    </div>
                    <hr></hr>
                    <p className="py-2">หมวดหมู่</p>
                    <div className="flex">
                        <Link to={`/`}>
                            <button className="bg-[#E2B22C] border text-white text-[13px] py-1 px-4 mr-2 hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300 inline-block">{productData.category}</button>
                        </Link>
                    </div>
                    <p className="py-2">คำค้นหา</p>
                    <Link to={`/`}>
                        <button className="bg-[#E2B22C] border text-white text-[13px] mb-2 py-1 px-4 mr-4 hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300 inline-block">{productData.searchword}</button>
                    </Link>
                    <div>

                    </div>
                    <hr></hr>
                    <p className="py-2">แชร์</p>

                    <div className="flex">
                        <a href="https://page.line.me/156vctty?openQrModal=true">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#02B92E] text-[#02B92E] rounded-full hover:bg-[#02B92E] hover:text-white transition duration-300">
                                <FaLine />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/rilonriland/posts/1013050012170754/">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#1773EA] text-[#1773EA] rounded-full hover:bg-[#1773EA] hover:text-white transition duration-300">
                                <FaFacebook />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/rilonthailand/">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#000000] text-[#000000] rounded-full hover:bg-[#000000] hover:text-white transition duration-300">
                                <FaXTwitter />
                            </div>
                        </a>
                        <a href="https://www.youtube.com/@rilon_thailand">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#0E76A8] text-[#0E76A8] rounded-full hover:bg-[#0E76A8] hover:text-white transition duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://www.rilon-riland.com/">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#E60023] text-[#E60023] rounded-full hover:bg-[#E60023] hover:text-white transition duration-300">
                                <FaPinterest />
                            </div>
                        </a>
                        <a href="https://www.rilon-riland.com/">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#25D366] text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition duration-300">
                                <FaWhatsapp />
                            </div>
                        </a>
                        <a href="https://www.rilon-riland.com/">
                            <div className="p-1.5 mr-1.5 text-[18px] bg-white border border-[#0078D4] text-[#0078D4] rounded-full hover:bg-[#0078D4] hover:text-white transition duration-300">
                                <MdOutlineEmail />
                            </div>
                        </a>
                    </div>

                </div>

            </div>

            <div className="mx-[10%] max-w-[1400px] 2xl:mx-[auto] my-[30px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
                <div>
                    <h1 className="text-[30px]">
                        รายละเอียดสินค้า
                    </h1>
                    <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C]" />
                </div>
                <div>
                    <h1 className="text-[32px] pt-4">{productData.name}</h1>
                    <p className="py-4">{productData.description}</p>
                </div>
                <QRcodeComponent />
                <div className="text-center">
                    <p className="pt-10 pb-2 font-bold text-[16px] text-[#FF0000]">ต้องการติดต่อด่วน โทร</p>
                    <div className="pb-8 text-[17px] font-semibold">
                        <p className="py-2">08-1694-5000 , 098-426-6953 </p>
                        <p className="py-2">095-961-9901 , 089-660-9609</p>
                        <p className="py-2">094-695-5599</p>
                        <p className="py-2">081-697-7000 office</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CatalogDetail