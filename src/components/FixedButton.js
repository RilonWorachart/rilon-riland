import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { FaShareAltSquare, FaRegAddressCard, FaFacebookSquare, FaWhatsapp, FaLine, FaPinterest, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function FixedButton() {
    const [backToTopButton, setBackToTopButton] = useState(false)
    const [isSocialActive, setIsSocialActive] = useState(false)
    const [isContactActive, setIsContactActive] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    const handleSocialToggle = () => {
        setIsSocialActive(prevState => !prevState);
    };

    const handleContactToggle = () => {
        setIsContactActive(prevState => !prevState);
    };

    return (
        <div>
            {backToTopButton && (
                <button className="fixed bottom-[15px] right-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-2xl text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300" onClick={scrollUp}>
                    <IoIosArrowUp className="" />
                </button>
            )}

            <div>
                <button className={`z-10 fixed bottom-[65px] left-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-xl text-white flex items-center justify-center rounded-full shadow-xl transition duration-300 ${isContactActive ? 'scale-75' : 'hover:scale-110'}`} onClick={() => { handleContactToggle() }}>
                    <FaRegAddressCard className="" />
                </button>
                <a href="https://page.line.me/156vctty?openQrModal=true"
                    className={`fixed left-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-full shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isContactActive ? 'bottom-[115px]' : 'bottom-[65px]'}`}
                >
                    <FaLine />
                </a>
                <a href="https://www.facebook.com/rilonriland/posts/1013050012170754/"
                    className={`fixed left-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-full shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isContactActive ? 'bottom-[165px]' : 'bottom-[65px]'}`}
                >
                    <FaFacebookSquare className="" />
                </a>
                <a href="mailto:janenyrilon_jingwei@hotmail.com"
                    className={`fixed left-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-full shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isContactActive ? 'bottom-[215px]' : 'bottom-[65px]'}`}
                >
                    <MdOutlineEmail className="" />
                </a>
                <a href=""
                    className={`fixed left-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-full shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isContactActive ? 'bottom-[265px]' : 'bottom-[65px]'}`}
                >
                    <FaPhoneAlt className="" />
                </a>
            </div>

            <div>
                <button className={`z-10 fixed bottom-[15px] left-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-xl text-white flex items-center justify-center rounded-xl shadow-xl transition duration-300 ${isSocialActive ? 'scale-75' : 'hover:scale-110'}`} onClick={() => { handleSocialToggle() }}>
                    <FaShareAltSquare className="" />
                </button>
                <a href="https://page.line.me/156vctty?openQrModal=true"
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[70px]' : 'left-[20px]'}`}
                >
                    <FaLine />
                </a>
                <a href="https://www.facebook.com/rilonriland/posts/1013050012170754/"
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[120px]' : 'left-[20px]'}`}
                >
                    <FaFacebookSquare className="" />
                </a>
                <a href=""
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[170px]' : 'left-[20px]'}`}
                >
                    <FaSquareXTwitter className="" />
                </a>
                <a href=""
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[220px]' : 'left-[20px]'}`}
                >
                    <FaLinkedinIn className="" />
                </a>
                <a href=""
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[270px]' : 'left-[20px]'}`}
                >
                    <FaPinterest className="" />
                </a>
                <a href=""
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[320px]' : 'left-[20px]'}`}
                >
                    <FaWhatsapp className="" />
                </a>
                <a href="mailto:janenyrilon_jingwei@hotmail.com"
                    className={`fixed bottom-[15px] h-[35px] w-[35px] bg-[#E2B22C] text-white flex items-center justify-center rounded-xl shadow-xl hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition-all duration-300 ${isSocialActive ? 'left-[370px]' : 'left-[20px]'}`}
                >
                    <MdOutlineEmail className="" />
                </a>
            </div>
        </div>
    )
}

export default FixedButton