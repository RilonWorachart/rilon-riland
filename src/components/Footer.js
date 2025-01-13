import React from 'react'

function Footer() {
    return (
        <>
            <div class="px-2 py-4 bg-[#E2B22C] text-white text-center">
                <div className="py-2">
                    <p className="text-[22px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</p>
                    <p>110/61,91/1 ตำบลไทรม้า อำเภอเมืองนนทบุรี นนทบุรี 11000</p>
                    <p>จันทร์ - เสาร์ เวลา 08:00 - 17:30 น. สั่งของได้ตลอด 24 ชั่วโมง</p>
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