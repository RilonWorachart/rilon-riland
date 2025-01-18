import React, { useState } from 'react'
import { useScroll } from './ScrollContext';
import { Link } from 'react-router-dom'
import { FaSortDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSwitcher from './LanguageSwitcher.js';

function Header() {
  const { navigateAndScroll } = useScroll();

  const [selectedLang, setSelectedLang] = useState('ไทย');
  const [selectedPic, setSelectedPic] = useState('https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg')

  const handleSelect = (lang, pic) => {
    setSelectedLang(lang);
    setSelectedPic(pic)

    setIsActive(false)
  };

  const handleSelectSidebar = (lang, pic) => {
    setSelectedLang(lang);
    setSelectedPic(pic)
    setIsActiveLangSidebar(false)
  }

  const [isActive, setIsActive] = useState(false)

  const [isActiveSidebar, setIsActiveSidebar] = useState(false)
  const [isActiveLangSidebar, setIsActiveLangSidebar] = useState(false)

  const handleSidebar = (num) => {
    navigateAndScroll(num)
    setIsActiveSidebar(false)
  }


  let [toggleMenu, setToggleMenu] = useState("home")

  return (
    <div className="font-plex-sans-thai px-3 md:px-24 py-3 flex items-center justify-between text-[#E2B22C] fixed w-full top-0 left-0 bg-white z-50">
      <div className="">
        <Link to="/">
          <img src='/images/page_images/logo-w.png' className="w-[60px] h-[45px]"></img>
        </Link>
      </div>
      <div className="px-2 py-2 hidden lg:flex lg:items-between lg:justify-between w-[500px] ">
        <Link to="/">
          <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "home" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggleMenu("home")}>
            <button className="hover:text-[#00007E]" >หน้าแรก</button>
          </div>
        </Link>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "aboutus" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggleMenu("aboutus")}>
          <button className="hover:text-[#00007E]" onClick={() => navigateAndScroll(0)}>เกี่ยวกับเรา</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "catelog" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggleMenu("catelog")}>
          <button className="hover:text-[#00007E]" onClick={() => navigateAndScroll(1)}>แคตตาล็อก</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "recommend" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggleMenu("recommend")}>
          <button className="hover:text-[#00007E]" onClick={() => navigateAndScroll(2)}>สินค้าขายดี</button>
        </div>
        <div className={`border-b-2 hover:text-[#00007E] hover:border-b-2 hover:border-[#E2B22C] ${toggleMenu == "contactus" ? "border-[#E2B22C]" : "border-white"}`} onClick={() => setToggleMenu("contactus")}>
          <button className="hover:text-[#00007E]" onClick={() => navigateAndScroll(3)}>ติดต่อเรา</button>
        </div>
      </div>


      <LanguageSwitcher />

   

      <div className="" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
        <div className="relative w-[180px]">
          <div className="hidden lg:flex justify-end text-[#E2B22C] hover:text-[#00007E]">
            <img
              src={selectedPic}
              alt="Selected Flag"
              className="w-6 h-4 mr-1.5"
            />
            <p>{selectedLang}</p>
            <FaSortDown />
          </div>
          {
            isActive && (
              <div className="absolute top-0 mt-0 left-[65px] z-50" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
                <div className="mt-10 w-[160px] bg-white shadow-2xl">
                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('ไทย', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
                      alt="THA Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    ไทย
                  </div>

                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('จีน (ตัวเต็ม)', "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png")}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                      alt="China Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    จีน (ตัวเต็ม)
                  </div>

                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('จีน (ตัวย่อ)', "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png")}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                      alt="China Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    จีน (ตัวย่อ)
                  </div>

                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('ญี่ปุ่น', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
                      alt="Japan Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    ญี่ปุ่น
                  </div>

                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('มาเลย์', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/800px-Flag_of_Malaysia.svg.png')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/800px-Flag_of_Malaysia.svg.png"
                      alt="Malaysia Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    มาเลย์
                  </div>

                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('เมียนม่า (พม่า)', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/800px-Flag_of_Myanmar.svg.png')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/800px-Flag_of_Myanmar.svg.png"
                      alt="Myanmar Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    เมียนม่า (พม่า)
                  </div>

                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('ลาว', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/800px-Flag_of_Laos.svg.png')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/800px-Flag_of_Laos.svg.png"
                      alt="Laos Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    ลาว
                  </div>


                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('เวียดนาม', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png"
                      alt="Vietnam Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    เวียดนาม
                  </div>


                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('อังกฤษ', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
                      alt="UK Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    อังกฤษ
                  </div>


                  <div
                    className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                    onClick={() => handleSelect('อินโดนีเซีย', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png')}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png"
                      alt="Indonesia Flag"
                      className="w-6 h-4 mr-1.5"
                    />
                    อินโดนีเซีย
                  </div>
                </div>

              </div>

            )
          }
        </div>
      </div>

      <div className="text-black text-[20px] hover:cursor-pointer lg:hidden">
        <GiHamburgerMenu onClick={() => setIsActiveSidebar(true)} />
        {isActiveSidebar && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" style={{ right: '280px' }}></div>
            <div className="fixed right-0 top-0 h-full text-white bg-[#E2B22C] w-[280px] z-70">
              <button
                onClick={() => setIsActiveSidebar(false)}
                className="absolute top-4 right-4 text-2xl font-bold hover:text-[#00007E]"
              >
                &times;
              </button>
              <div className="flex flex-col items-center justify-center space-y-4 h-[100%] text-[18px]">
                <Link to="/">
                  <div
                    className="hover:text-[#00007E]"
                    onClick={() => {
                      setIsActiveSidebar(false)
                    }}
                  >
                    <button>หน้าแรก</button>
                  </div>
                </Link>
                <div
                  className="hover:text-[#00007E]"
                  onClick={() => {
                    handleSidebar(0)
                  }}
                >
                  <button>เกี่ยวกับเรา</button>
                </div>
                <div
                  className="hover:text-[#00007E]"
                  onClick={() => {
                    handleSidebar(1)
                  }}
                >
                  <button>แคตตาล็อก</button>
                </div>
                <div
                  className="hover:text-[#00007E]"
                  onClick={() => {
                    handleSidebar(2)
                  }}
                >
                  <button>สินค้าขายดี</button>
                </div>
                <div
                  className="hover:text-[#00007E]"
                  onClick={() => {
                    handleSidebar(3)
                  }}
                >
                  <button>ติดต่อเรา</button>
                </div>


                <div className="w-[100%] flex justify-center items-center" onMouseEnter={() => setIsActiveLangSidebar(true)} onMouseLeave={() => setIsActiveLangSidebar(false)}>
                  <div className="relative">
                    <div className="flex text-white hover:text-[#00007E]">
                      <img
                        src={selectedPic}
                        alt="Selected Flag"
                        className="w-6 h-4 mr-1.5"
                      />
                      <p>{selectedLang}</p>
                      <FaSortDown />
                    </div>
                    {
                      isActiveLangSidebar && (
                        <div className="absolute top-0 mt-0 z-50">
                          <div className="mt-10 w-[160px] bg-white text-[#E2B22C] shadow-2xl h-[400px] overflow-scroll">
                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() =>
                                handleSelectSidebar('ไทย', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg')
                              }
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
                                alt="THA Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              ไทย
                            </div>

                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('จีน (ตัวเต็ม)', "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png")}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                                alt="China Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              จีน (ตัวเต็ม)
                            </div>

                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('จีน (ตัวย่อ)', "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png")}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                                alt="China Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              จีน (ตัวย่อ)
                            </div>

                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('ญี่ปุ่น', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
                                alt="Japan Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              ญี่ปุ่น
                            </div>

                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('มาเลย์', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/800px-Flag_of_Malaysia.svg.png')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/800px-Flag_of_Malaysia.svg.png"
                                alt="Malaysia Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              มาเลย์
                            </div>

                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('เมียนม่า (พม่า)', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/800px-Flag_of_Myanmar.svg.png')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/800px-Flag_of_Myanmar.svg.png"
                                alt="Myanmar Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              เมียนม่า (พม่า)
                            </div>

                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('ลาว', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/800px-Flag_of_Laos.svg.png')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/800px-Flag_of_Laos.svg.png"
                                alt="Laos Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              ลาว
                            </div>


                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('เวียดนาม', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png"
                                alt="Vietnam Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              เวียดนาม
                            </div>


                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('อังกฤษ', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
                                alt="UK Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              อังกฤษ
                            </div>


                            <div
                              className="flex items-center p-2 cursor-pointer hover:text-[#00007E]"
                              onClick={() => handleSelectSidebar('อินโดนีเซีย', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png')}
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png"
                                alt="Indonesia Flag"
                                className="w-6 h-4 mr-1.5"
                              />
                              อินโดนีเซีย
                            </div>
                          </div>

                        </div>

                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
        )}




      </div>
 </div>


  )
}

export default Header