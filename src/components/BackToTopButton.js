import { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false)

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

    return (
        <div>
            {backToTopButton && (
                <button className="fixed bottom-[15px] right-[20px] h-[35px] w-[35px] bg-[#E2B22C] text-2xl text-white font-bold flex items-center justify-center shadow-lg hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300" onClick={scrollUp}>
                    <IoIosArrowUp className="" />
                </button>
            )}
        </div>
    )
}

export default BackToTopButton