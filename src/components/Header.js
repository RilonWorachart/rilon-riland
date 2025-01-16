import React, { useState } from 'react'
import logoW from '../images/logo-w.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";

function Header({ scrollToSection }) {
  let navigate = useNavigate();

  const handleClickHomePage = () => {
    navigate('/')
  }

  const [selectedLang, setSelectedLang] = useState('ไทย');

  const handleSelect = (lang) => {
    setSelectedLang(lang);
  };

  const [isActive, setIsActive] = useState(true)



  let [toggleMenu, setToggoleMenu] = useState("home")

  return (
    <div className="px-3 md:px-24 py-3 flex items-center justify-between text-[#E2B22C] fixed w-full top-0 left-0 bg-white z-50">
      <div className="">
        <Link to="/">
          <img src={logoW} className="w-[60px] h-[45px]"></img>
        </Link>
      </div>
      <div className="px-2 py-2 hidden md:flex md:items-between md:justify-between w-[500px] ">
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "home" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggoleMenu("home")}>
          <button className="hover:text-[#00007E]" onClick={handleClickHomePage}>หน้าแรก</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "aboutus" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggoleMenu("aboutus")}>
          <button className="hover:text-[#00007E]" onClick={() => scrollToSection(0)}>เกี่ยวกับเรา</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "catelog" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggoleMenu("catelog")}>
          <button className="hover:text-[#00007E]" onClick={() => scrollToSection(1)}>แคตตาล็อก</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "recommend" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggoleMenu("recommend")}>
          <button className="hover:text-[#00007E]" onClick={() => scrollToSection(2)}>สินค้าขายดี</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "contactus" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggoleMenu("contactus")}>
          <button className="hover:text-[#00007E]" onClick={() => scrollToSection(3)}>ติดต่อเรา</button>
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="flex text-[#E2B22C] hover:text-[#00007E]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
              alt="THA Flag"
              className="w-8 h-5 mr-2"
            />
            <p>{selectedLang}</p>
            <FaSortDown />
          </div>

          {
            isActive && (
              <div className="absolute top-10 right-0 z-50 w-[150px] bg-white">
              <div
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect('ไทย', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
                  alt="THA Flag"
                  className="w-8 h-5 mr-2"
                />
                ไทย
              </div>
    
              <div
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect('English', 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg"
                  alt="UK Flag"
                  className="w-8 h-5 mr-2"
                />
                English
              </div>
    
              <div
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect('日本語', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
                  alt="Japan Flag"
                  className="w-8 h-5 mr-2"
                />
                日本語
              </div>
            </div>
            )
          }


        </div>
      </div>
    </div>
  )
}

export default Header