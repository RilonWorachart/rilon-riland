import React from 'react'
import { FaInstagram, FaLine, FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import logoW from '../images/logo-w.png'


function Footer() {
    return (
        <>
            <div class="px-2 py-8 bg-[#E2B22C] text-white text-center">
                <div className="flex justify-center py-[22px]">
                    <img src={logoW} className="w-[75px]"></img>
                </div>
                <div className="pb-2">
                    <p className="text-[20px] font-bold">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</p>
                    <p>110/61,91/1 ตำบลไทรม้า อำเภอเมืองนนทบุรี นนทบุรี 11000</p>
                    <p>จันทร์ - เสาร์ เวลา 08:00 - 17:30 น. สั่งของได้ตลอด 24 ชั่วโมง</p>
                </div>
                <div className="flex justify-center text-[26px] py-3">
                    <a href="https://media.yellowpages.co.th/yellowpages/line/th/52336657/672d8afba717d.png?itok=6785dd8b">
                        <FaLine className="mr-0.5 hover:text-[#02B92E] " />
                    </a>
                    <a href="https://www.facebook.com/rilonriland/posts/1013050012170754/">
                        <FaFacebookSquare className="mr-0.5 hover:text-[#1773EA]" />
                    </a>
                    <a href="https://www.instagram.com/rilonthailand/">
                        <FaInstagram className="mr-0.5 hover:text-[#BB5287] " />
                    </a>
                    <a href="https://www.youtube.com/@rilon_thailand">
                        <FaYoutubeSquare className="mr-0.5 hover:text-[#F60000] " />
                    </a>
                </div>
                <div className="py-2">
                    <p>อีเมล :
                        <a href="" className="hover:text-[#00007E]"> janenyrilon_jingwei@hotmail.com</a>,
                        <a href="" className="hover:text-[#00007E]"> worachart_soi@hotmail.com</a>,
                        <a href="" className="hover:text-[#00007E]"> worachartgroup@gmail.com</a>
                    </p>
                    <p>โทรศัพท์ :
                        <a href="" className="hover:text-[#00007E]">
                            08-1694-5000
                        </a>,
                        <a href="" className="hover:text-[#00007E]">
                            08-1697-7000
                        </a>,
                        <a href="" className="hover:text-[#00007E]">
                            09-5961-9901
                        </a>
                    </p>
                </div>
            </div>
            <div class="bg-white text-center py-2 text-[12px]">
                <p>© 2568 <a href="" className="text-[#E2B22C] hover:text-[#00007E]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</a></p>
                <p>All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer