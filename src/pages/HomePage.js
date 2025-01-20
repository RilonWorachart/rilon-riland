import React, {useEffect, useRef} from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import RecommendProductList from '../components/homepage/RecommendProductList'
import YouTubeEmbed from '../components/homepage/YoutubeEmbed'
import Contact from '../components/Contact'
import QRcodeComponent from '../components/QRcodeComponent'
import ItemList from '../components/ItemList'
import { useScroll } from '../components/header/ScrollContext';
import { FaFacebookF, FaGlobe, FaInstagram, FaLine, FaPhoneAlt, FaYoutube, FaMapMarkerAlt} from "react-icons/fa";
import { MdBusinessCenter, MdMail } from "react-icons/md";


function HomePage() {
    const { setSectionRefs } = useScroll();
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    useEffect(() => {
        setSectionRefs([section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current]);
      }, [setSectionRefs]);

    return (
        <>
            <div className="min-h-screen font-plex-sans-thai">
                <img src="/images/page_images/Y-Banding-03-01.png" className="mt-[70px]"></img>
                <div className="px-[10%] pt-4 pb-6 text-center text-white bg-[#E2B22C]">
                    <h1 className="text-[34px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h1>
                </div>
                <div className="px-[10%] py-4 aligns-center justify-center ">
                    <div className="py-1 flex flex-wrap">
                        <FaPhoneAlt className="mt-[2px] mr-4" />
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">08-1694-5000</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;08-1697-7000</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;09-5961-9901 </a>
                    </div>
                    <div className=" py-1 flex flex-wrap">
                        <MdMail className="mt-[2px] mr-4"/>
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">janenyrilon_jingwei@hotmail.com</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;worachart_soi@hotmail.com</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;worachartgroup@gmail.com</a>
                    </div>
                    <div className="py-1 flex flex-wrap">
                        <FaMapMarkerAlt className="mt-[2px] mr-4" />
                        <p>110/61,91/1 ตำบลไทรม้า อำเภอเมืองนนทบุรี นนทบุรี 11000</p>
                    </div>

                    <div className="py-2 pr-2 flex text-[16px] ">
                        <a href="https://page.line.me/156vctty?openQrModal=true" className="bg-[#02B92E] p-1.5 mr-2  text-white rounded-full hover:bg-[#49D249]">
                            <FaLine />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61555700229121" className="bg-[#1773EA] p-1.5 mr-2 text-white rounded-full hover:bg-[#5A9DF3]">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/rilon_thailand/" className="bg-[#BB5287] p-1.5 mr-2 text-white rounded-full hover:bg-[#E9768C]">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@rilon_thailand" className="bg-[#F60000] p-1.5 mr-2 text-white rounded-full hover:bg-[#FC4949]">
                            <FaYoutube />
                        </a>
                        <a href="https://www.rilon-riland.com/" className="bg-[#15A2F2] p-1.5 mr-2 text-white rounded-full hover:bg-[#58A0D6]">
                            <FaGlobe />
                        </a>
                    </div >
                </div >


                <div className="px-[10%] text-center py-8 background">
                    <div className="pb-4">
                        <h1 className="text-[34px] text-white">
                            ตัวแทนจำหน่ายเครื่องเชื่อมอินเวอร์เตอร์ เครื่องเชื่อมไรล่อน
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
                    </div>
                    <div className="md:flex">
                        <div className="text-[#E2B22C] backdrop-blur-sm bg-white/10 z-0 pt-1 pb-4 px-[20px] md:w-[60%]">
                            <h1 className="text-[34px] pt-3 pb-6 ">
                                บริษัท วรชาติ กรุ๊ป จำกัด
                            </h1>
                            <p className="text-[22px] text-[#F4D016] py-2">
                                ตัวแทนจำหน่ายเครื่องเชื่อมอินเวอร์เตอร์
                                แบรนด์คุณภาพ RILON JW
                                เรามีศูนย์บริการซ่อมบำรุงและจัดจำหน่ายอะไหล่อุปกรณ์เสริม
                                เพื่อให้ลูกค้าหมดกังวลเมื่อเกิดปัญหาขึ้น
                            </p>
                            <h2 className="text-[24px] text-[#F4D016] font-bold ">
                                "คุณภาพและความพึงพอใจของลูกค้า สำคัญเสมอ"
                            </h2>
                        </div>
                        <div className="md:w-[40%] md:ml-[30px] mt-10 md:mt-0">
                            <img src="/images/page_images/logo.png"></img>
                        </div>
                    </div>
                </div>


                <div className="md:flex justify-between items-center bg-[#FFD600] px-[10%] text-center py-8">
                    <div className="py-12 md:w-[30%]">
                        <h1 className="text-[28px]">DEALER</h1>
                        <img src='/images/page_images/Dealer.jpg' className="mt-4 mb-6 mx-auto rounded-[50%] object-right overflow-hidden border-solid border-8 border-white w-96 h-96 md:w-64 md:h-64 2xl:w-96 2xl:h-96  object-cover"></img>
                        <p>ตัวแทนจำหน่ายเครื่องเชื่อมRILON JW JWjingweitip</p>
                    </div>
                    <div className="py-12 md:w-[30%]">
                        <h1 className="text-[28px]">HIGHER EFFICIENCY</h1>
                        <img src='/images/page_images/HighEfficiency.jpg' className="mt-4 mb-6 mx-auto rounded-[50%] object-center overflow-hidden border-solid border-8 border-white w-96 h-96 md:w-64 md:h-64 2xl:w-96 2xl:h-96 object-cover"></img>
                        <p>เครื่องเชื่อมอินเวอร์เตอร์ประสิทธิภาพสูงใช้งานง่าย</p>
                    </div>
                    <div className="py-12 md:w-[30%]">
                        <h1 className="text-[28px]" >WARANTY SERVICE</h1>
                        <img src='/images/page_images/WarantyService.jpg' className="mt-4 mb-6 mx-auto rounded-[50%]  overflow-hidden border-solid border-8 border-white w-96 h-96 md:w-64 md:h-64 2xl:w-96 2xl:h-96 object-cover"></img>
                        <p>บริการหลังการขาย เรามีศูนย์ซ่อมและจัดจำหน่ายอะไหล่จากทีมมืออาชีพ</p>
                    </div>
                </div>


                <div className="px-[10%] py-4 text-center ">
                    <div className="flex justify-center items-center">
                        <img src='/images/page_images/Y-Banding-02-01.png' className="py-4 xl:max-w-[50%] item-center"></img>
                    </div>
                    <hr />
                    <h1 className="py-4 text-[24px]">
                        ติดต่อ แอดไลน์ ได้เลย
                    </h1>
                    
                    <div  ref={section1Ref} className="flex justify-center items-center">
                        <img src='/images/page_images/Line3pic.png' className="py-4 xl:max-w-[40%] item-center"></img>
                    </div>

                    <div>
                        <h1 className="pt-12 text-[30px]">
                            เกี่ยวกับเรา
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
                            <p className='pt-3'>
                                บริษัท วรชาติ กรุ๊ป จำกัด ก่อตั้งมาตั้งแต่ปี 2551 โดยผู้บริหารที่มีความชำนาญงานด้านการงานเชื่อมสแตนเลส งานเชื่อมโลหะ ด้วยประสบการณ์ด้านงานเชื่อมต่างๆ จึงเล็งเห็นธุรกิจด้านเครื่องเชื่อม เครื่องตัดพลาสม่า เราจึงมีความมุ่งมั่นที่จะเป็นตัวแทนจำหน่าย Rilon เครื่องเชื่อมตัดในประเทศไทย ผลิตสินค้าให้เป็นไปตามมาตรฐานทางวิศวกรรม พร้อมที่จะพัฒนาผลิตภัณฑ์สินค้าให้มีคุณภาพอย่างต่อเนื่อง และขายสินค้าในราคายุติธรรม
                            </p>
                            <div className="flex justify-center items-center">
                                <img src='/images/page_images/Plusma.png' className="py-4 xl:max-w-[35%] item-center"></img>
                            </div>
                    </div>
                    <div className="pt-4 pb-14">
                        <p className="text-[#FF0042] text-[20px] py-[20px]">สนใจติดต่อสอบถามเพิ่มเติม สแกนเลย</p>
                        <div className="flex justify-center items-center pt-[10px]">
                            <img src='/images/page_images/QRcode.png' className="w-[200px]"></img>
                        </div>
                        <p className="text-[#FF0042] text-[20px] pt-[30px] py-[10px]">คลิกเพิ่มเพื่อน</p>
                        <a href="https://page.line.me/156vctty?openQrModal=true" className="flex justify-center items-center">
                            <img src='/images/page_images/AddLine.png' className="w-[200px]"></img>
                        </a>
                    </div>
                </div>


                <div className="px-[10%] py-[70px] bg-[#FFD600] md:flex md:justify-between">
                    <div className="md:w-[50%] px-4 ">
                        <h1 className="py-6 text-[30px] text-center">
                            ศูนย์จัดจำหน่ายและซ่อมชุดเครื่องเชื่อมอินเวอร์เตอร์ไรล่อน
                        </h1>
                        <p className="py-4">
                            จำหน่ายเครื่องเชื่อมไรล่อนและอุปกรณ์เสริม มีทุกรุ่นรองรับทุกการใช้งาน ไม่ว่าจะเป็นเครื่อง ARC TIG  MIG CUT SAW คุณภาพสูงบริการครบวงจรทั้งอะไหล่และอุปกรณ์ ศูนย์ซ่อมบำรุง ซื้อครบจบที่เดียว
                        </p>
                    </div>
                    <div className="md:w-[47%]">
                        <img src='/images/page_images/YellowRilon.png'></img>
                    </div>
                </div>

                <div className="px-[10%] py-4">
                    <div className="pb-4 text-center">
                        <h1 className="text-[34px]">
                            บริษัท วรชาติ กรุ๊ป จำกัด
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
                    </div>
                    <p>ผู้นำเข้า และ ตัวแทนจำหน่าย เครื่องเชื่อม เครื่องตัดพลาสม่า ภายใต้แบรนด์ ไรล่อน Rilon, JW Welding และ JW Jinweitip จำหน่ายอะไหล่อุปกรณ์ สำหรับงานเชื่อม งานตัดโลหะ ทุกชนิด สายเชื่อม สายตัดพลาสม่า อะไหล่ครบครัน</p>
                    <YouTubeEmbed />
                    <p className="py-2"><b>สุดยอดเครื่องเชื่อม RILON (ไรล่อน)</b> ระบบอินเวอร์เตอร์</p>
                    <p className="font-bold py-2">เครื่องเชื่อม Rilon TIG</p>
                    <ul class="list-disc pl-6 space-y-2 py-2">
                        <li>เครื่องเชื่อมอาร์ก้อน TIG 200CT, TIG 200S, TIG 200P, TIG 200M, TIG 300A, TIG 315 PG, TIG 400GT</li>
                        <li>เครื่องเชื่อมอาร์กอน ที่มีระบบเชื่อมงานอลูมิเนียมแบบ 3 ระบบ TIG 250AC/DC, 250AC/DC, 315AC/DC, 500PAC/DC</li>
                        <li>เครื่องเชื่อมไฟฟ้า ARC 200GE, ARC 200T, ARC 200CT, ARC 300, ARC 400GT, ARC 500GT, ARC 6301</li>
                    </ul>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/CO2.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <p className="font-bold py-2">เครื่องเชื่อมซีโอทู MIG </p>
                    <ul class="list-disc pl-6 space-y-2 py-2">
                        <li>เครื่องเชื่อมซีโอทู MIG 180PGDM, MIG 250 PGDM
                            MIG 251 GE, MIG 200 CT, MIG 200GW, MIG 250GS,MIG 250S, MIG 270, MIG 300GS, MIG 300GN, MIG 300GF, MIG 350IJ, MIG 500I, MIG 500GF</li>
                    </ul>
                    <p className="font-bold py-2">เครื่องตัดพลาสม่า CUT </p>
                    <ul class="list-disc pl-6 space-y-2 py-2">
                        <li>เครื่องตัดพลาสม่า CUT 40, CUT 60PILOT, CUT 100/160, CUT 80G, CUT 100GT, CUT 125I , CUT 165I</li>
                    </ul>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/Argon.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <p>
                        อึด ทน หมดปัญหาเชื่อมแล้วหยุด สามารถใช้งานได้ต่อเนื่องตลอดอายุเครื่อง จำหน่าย เครื่องเชื่อมไฟฟ้า, เครื่องเชื่อมไฟฟ้าสำหรับอุตสาหกรรม, เครื่องเชื่อมไฟฟ้าสำหรับงานก่อสร้างไม่ว่าจะงานเล็กหรืองานใหญ่, เครื่องเชื่อมอาร์ก้อน, เครื่องเชื่อมสแตนเลส, เครื่องเชื่อมอลูมิเนียม, เครื่องตัดพลาสม่า, เครื่องเชื่อมซีโอทู, สายเชื่อม, สายตัด, เครื่องตัด, เครื่องเจียร์, อุปกรณ์เครื่องเชื่อม, อุปกรณ์เครื่องตัด, น้ำยางานเชื่อม, แผ่นตัด, แผ่นเจียร์, ทรายซ้อน, สายพานบาก, ถังอาร์ก้อน, ถังCO2
                    </p>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/Jingweitip.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <h1 className="text-[30px] font-bold">
                        อะไหล่อุปกรณ์
                    </h1>
                    <div className="flex justify-center items-center py-12">
                    <img src='/images/page_images/WP.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <p>
                        JW Jingweitip "สินค้าหรือผลิตภัณท์ที่ได้ผ่านการรับรองระบบการจัดการคุณภาพ ISO9001-2015; ผลิตภัณฑ์ต่างๆ ที่ผลิตออกมามีความสมเหตุสมผลในด้านการออกแบบและเทคโนโลยีขั้นสูง และจำหน่ายได้ดีในเอเชียตะวันออกเฉียงใต้ ยุโรป และสหรัฐอเมริกา หัวเชื่อม TIG, หัวเชื่อม MIG, หัวตัดพลาสม่า และผลิตภัณฑ์ชุดข้อต่อสายต่างๆ ได้ผ่านการรับรอง CE ของสหภาพยุโรปและการรับรอง 3C ระดับประเทศ"ที่เดียวจบครบจบที่เรา
                    </p>
                    <div className="flex justify-center items-center pt-12 pb-6">
                        <img src='/images/page_images/Torch.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <div className="flex justify-center items-center py-6">
                        <img src='/images/page_images/Equipment.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <div className="flex justify-center items-center pt-6 pb-12">
                        <img src='/images/page_images/Rotate.png' className="xl:max-w-[1200px]"></img>
                    </div>
                </div>

                <div className="text-center">
                    <a href="https://anyflip.com/uggut/ubmb/" className="text-[30px] text-[#FFFF00]">ดูข้อมูลเพิ่มเติมได้ที่ E-Book</a>
                    <div className="flex justify-center items-center pb-8">
                        <img src='/images/page_images/Book.png' className="w-[350px]"></img>
                    </div>
                    <p className="py-10 font-bold text-[20px]">สนใจสอบถามรายละเอียดเพิ่มเติมได้ที่</p>
                    <div className="text-[#E4403C] pb-8 text-[17px]">
                        <p>08-1694-5000 , 098-426-6953 </p>
                        <p>095-961-9901 , 089-660-9609</p>
                        <p>094-695-5599</p>
                        <p>081-697-7000 office</p>
                    </div>
                    <div className="">
                        <QRcodeComponent />
                        <p className="text-start py-8 text-black px-[100px]">
                            เป็นศูนย์รวมอุปกรณ์และอะไหล่เกือบทุกชนิด  มีสินค้าพร้อมจำหน่าย และเป็นศูนย์ซ่อมเครื่อง RILON ครบวงจร ลูกค้านำสินค้ามาซ่อมแล้วรอรับกลับได้เลย ราคาเป็นกันเอง  บริการอย่างมืออาชีพ พิสูจน์ได้ที่ บริษัท วรชาติ กรุ๊ป เท่านั้น
                        </p>
                    </div>
                </div>

                <div  ref={section2Ref}></div>
                <ItemList/>

                <CategorySearch/>

                <div  ref={section3Ref}></div>
                <RecommendProductList/>

                <div className="bg-[#FFD600] md:flex px-[10%] py-4 space-between">
                    <div className="bg-white mb-10 md:mb-0 md:mr-10" >
                        <img src='/images/page_images/WeldingMC.png' className="w-[100%]"></img>
                        <h1 className="text-[20px] text-center p-4">เครื่องเชื่อมขวัญใจช่าง RILON</h1>
                        <p className="px-4 pb-8">ศูนย์จำหน่ายเครื่องเชื่อมไรล่อน RILON welding machine distributor บริการพร้อมอะไหล่ สุดยอดเครื่องเชื่อมระบบอินเวอร์เตอร์เครื่องเชื่อมไฟฟ้าเครื่องเชื่อมซีโอทู เครื่องตัดพลาสม่าสำหรับงานก่อสร้างและงานอุตสาหกรรมเครื่องเชื่อมอาร์กอน อุปกรณ์เครื่องเชื่อมน้ำยางานเชื่อมเครื่องตัดไฟเบอร์เครื่องเจียร์แผ่นตัด แผ่นเจียร์ทรายซ้อน</p>
                    </div>
                    <div className="bg-white mb-10 md:mb-0 md:mr-10">
                        <img src='/images/page_images/TorchSerPana.png' className="w-[100%]"></img>
                        <h1 className="text-[20px] text-center p-4">ตัวแทนจำหน่าย JW Jingweitip</h1>
                        <p className="px-4 pb-8">ตัวแทนจำหน่าย อุปกรณ์และอะไหล่สำหรับงานเชื่อมอาร์ก่อน ผู้เชี่ยวชาญเกี่ยวกับอุปกรณ์เชื่อมโลหะ ตัวแทนจำหน่าย JW Jingweitip ในประเทศไทย สายTorch Ser Pana 200 ท้าย Euro หัวเชื่อม ถุงมือเชื่อม ชุดสายปืน เซรามิกแบบยาว ตัวจับลวดเชื่อม สายเชื่อม ตัวจับสายดิน ข้อต่อสายเชื่อม หน้ากากเชื่อม หมวกนิรภัย อุปกรณ์ช่างเชื่อม</p>
                    </div>
                    <div className="bg-white">
                        <img src='/images/page_images/Robot.png' className="w-[100%]"></img>
                        <h1 className="text-[20px] text-center p-4">เชื่อม ROBOT รวดเร็วแม่นยำ</h1>
                        <p className="px-4 pb-8">หุ่นยนต์งานเชื่อม เป็นกระบวนการเชื่อมแบบอัตโนมัติ ใช้ในงานก่อสร้าง การเชื่อมไฟฟ้าในปัจจุบันมีการพัฒนาโดยการใช้หุ่นยนต์เข้ามาประยุกต์ ซึ่งประสบความสำเร็จมากในวงการอุตสาหรรมรถยนต์และอุตสาหกรรมอื่นๆ การเชื่อมโดยโรบอทนอกจะจะทำให้งานเสร็จรวดเร็ว
                            แม่นยำ ตรงตามแบบ โดยหุ่นยนต์สามารถทำงานได้ตลอด 24 ชั่วโมง </p>
                    </div>
                </div>

                <div  ref={section4Ref} className="px-[12%] py-[100px] flex justify-between">
                    <div className="w-[50%]">
                        <div className="py-3 flex flex-wrap">
                            <MdBusinessCenter className="mt-[2px] mr-4"/>
                            <p>บริษัท วรชาติ กรุ๊ป จำกัด</p>
                        </div>
                        <Contact />
                    </div>
                    <div className="mx-[auto] my-[auto] w-[45%]" >
                        <iframe className="w-[400px] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15493.791027039693!2d100.4626156!3d13.8721544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29aca882d796f%3A0xed3662f97b98ac95!2sRILON!5e0!3m2!1sth!2sth!4v1679737367033!5m2!1sth!2sth" ></iframe>
                        {/* <button className="bg-[#E2B22C] text-white py-1 px-6 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">นำทาง</button> */}
                    </div>
                </div>
                <Footer/>
            </div >
        </>
    )
}

export default HomePage