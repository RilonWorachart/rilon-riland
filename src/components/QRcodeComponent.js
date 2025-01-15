import React from 'react'
import QRcode from '../images/QRcode.png'
import LineAdd from '../images/Addline.png'

function QRcodeComponent() {
  return (
    <div className="px-[100px] text-[#FF0000] text-center">
      <p className="text-[20px] font-bold">
        สนใจติดต่อสอบถามเพิ่มเติมทางไลน์ สแกนเลย
      </p>
      <div className="flex justify-center items-center py-8">
        <img src={QRcode} className="w-[150px]"></img>
      </div>
      <p className="font-bold text-[18px]">
        หรือคลิกเพิ่มเพื่อน
      </p>
      <a href="https://page.line.me/156vctty?openQrModal=true" className="flex justify-center items-center py-4">
        <img src={LineAdd} className="w-[200px]"></img>
      </a>
    </div>
  )
}

export default QRcodeComponent