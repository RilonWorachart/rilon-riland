import React, {useState} from 'react'
import logoW from '../images/logo-w.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Header({ scrollToSection }) {
  let navigate = useNavigate();

  const handleClickHomePage = () => {
    navigate('/')
  }

  let [toggleMenu, setToggoleMenu] = useState("home")

  return (
    <div className="px-3 xl:px-24 py-3 flex items-center justify-between text-[#E2B22C] fixed w-full top-0 left-0 bg-white z-50">
      <div className="">
        <Link to="/">
          <img src={logoW} className="w-[60px] h-[45px]"></img>
        </Link>
      </div>
      <div className="px-2 py-2 flex items-between justify-between w-[500px]">
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
        <div>
          <></>
          <p>ไทย</p>
        </div>
      </div>
    </div>
  )
}

export default Header