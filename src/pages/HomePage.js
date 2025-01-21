import React, { useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import RecommendProductList from '../components/homepage/RecommendProductList'
import YouTubeEmbed from '../components/homepage/YoutubeEmbed'
import Contact from '../components/Contact'
import QRcodeComponent from '../components/QRcodeComponent'
import ItemList from '../components/ItemList'
import { useScroll } from '../components/header/ScrollContext';
import { FaFacebookF, FaGlobe, FaInstagram, FaLine, FaPhoneAlt, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { MdBusinessCenter, MdMail } from "react-icons/md";
import { useTranslation } from 'react-i18next';



function HomePage() {
    const { setSectionRefs } = useScroll();
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        setSectionRefs([section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current]);
    }, [setSectionRefs]);

    return (
        <>
            <div className="min-h-screen font-plex-sans-thai">
                <img src="/images/page_images/Y-Banding-03-01.png" className="mt-[70px]"></img>
                <div className="px-[10%] pt-4 pb-6 text-center text-white bg-[#E2B22C]">
                    <h1 className="text-[34px]">{t('homepage.h1')}</h1>
                </div>
                <div className="px-[10%] py-4 aligns-center justify-center ">
                    <div className="py-1 flex flex-wrap">
                        <FaPhoneAlt className="mt-[2px] mr-4" />
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">08-1694-5000</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;08-1697-7000</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;09-5961-9901 </a>
                    </div>
                    <div className=" py-1 flex flex-wrap">
                        <MdMail className="mt-[2px] mr-4" />
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">janenyrilon_jingwei@hotmail.com</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;worachart_soi@hotmail.com</a>,
                        <a className="text-[#E2B22C] hover:text-[#00007E]" href="">&nbsp;worachartgroup@gmail.com</a>
                    </div>
                    <div className="py-1 flex flex-wrap">
                        <FaMapMarkerAlt className="mt-[2px] mr-4" />
                        <p>{t('homepage.address')}</p>
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
                            {t('homepage.h2')}
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
                    </div>
                    <div className="md:flex">
                        <div className="text-[#E2B22C] backdrop-blur-sm bg-white/10 z-0 pt-1 pb-4 px-[20px] md:w-[60%]">
                            <h1 className="text-[34px] pt-3 pb-6 ">
                                {t('homepage.h3')}
                            </h1>
                            <p className="text-[22px] text-[#F4D016] py-2">
                                {t('homepage.p1')}
                            </p>
                            <h2 className="text-[24px] text-[#F4D016] font-bold ">
                                {t('homepage.p2')}
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
                        <p>{t('homepage.p3')}</p>
                    </div>
                    <div className="py-12 md:w-[30%]">
                        <h1 className="text-[28px]">HIGHER EFFICIENCY</h1>
                        <img src='/images/page_images/HighEfficiency.jpg' className="mt-4 mb-6 mx-auto rounded-[50%] object-center overflow-hidden border-solid border-8 border-white w-96 h-96 md:w-64 md:h-64 2xl:w-96 2xl:h-96 object-cover"></img>
                        <p>{t('homepage.p4')}</p>
                    </div>
                    <div className="py-12 md:w-[30%]">
                        <h1 className="text-[28px]" >WARANTY SERVICE</h1>
                        <img src='/images/page_images/WarantyService.jpg' className="mt-4 mb-6 mx-auto rounded-[50%]  overflow-hidden border-solid border-8 border-white w-96 h-96 md:w-64 md:h-64 2xl:w-96 2xl:h-96 object-cover"></img>
                        <p>{t('homepage.p5')}</p>
                    </div>
                </div>


                <div className="px-[10%] py-4 text-center ">
                    <div className="flex justify-center items-center">
                        <img src='/images/page_images/Y-Banding-02-01.png' className="py-4 xl:max-w-[50%] item-center"></img>
                    </div>
                    <hr />
                    <h1 className="py-4 text-[24px]">
                        {t('homepage.h4')}
                    </h1>

                    <div ref={section1Ref} className="flex justify-center items-center">
                        <img src='/images/page_images/Line3pic.png' className="py-4 xl:max-w-[40%] item-center"></img>
                    </div>

                    <div>
                        <h1 className="pt-12 text-[30px]">
                            {t('homepage.h5')}
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
                        <p className='pt-3'>
                            {t('homepage.p6')}
                        </p>
                        <div className="flex justify-center items-center">
                            <img src='/images/page_images/Plusma.png' className="py-4 xl:max-w-[35%] item-center"></img>
                        </div>
                    </div>
                    <div className="pt-4 pb-14">
                        <p className="text-[#FF0042] text-[20px] py-[20px]">{t('homepage.h6')}</p>
                        <div className="flex justify-center items-center pt-[10px]">
                            <img src='/images/page_images/QRcode.png' className="w-[200px]"></img>
                        </div>
                        <p className="text-[#FF0042] text-[20px] pt-[30px] py-[10px]">{t('homepage.h7')}</p>
                        <a href="https://page.line.me/156vctty?openQrModal=true" className="flex justify-center items-center">
                            <img src='/images/page_images/AddLine.png' className="w-[200px]"></img>
                        </a>
                    </div>
                </div>


                <div className="px-[10%] py-[70px] bg-[#FFD600] md:flex md:justify-between">
                    <div className="md:w-[50%] px-4 ">
                        <h1 className="py-6 text-[30px] text-center">
                            {t('homepage.h8')}
                        </h1>
                        <p className="py-4">
                            {t('homepage.p7')}
                        </p>
                    </div>
                    <div className="md:w-[47%]">
                        <img src='/images/page_images/YellowRilon.png'></img>
                    </div>
                </div>

                <div className="px-[10%] py-4">
                    <div className="pb-4 text-center">
                        <h1 className="text-[34px]">
                        {t('homepage.h9')}
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
                    </div>
                    <p>{t('homepage.p8')}</p>
                    <YouTubeEmbed />
                    <p className="py-2"><b>{t('homepage.h10')}</b> {t('homepage.p9')}</p>
                    <p className="font-bold py-2">{t('homepage.h11')}</p>
                    <ul class="list-disc pl-6 space-y-2 py-2">
                        <li>{t('homepage.p10')}</li>
                        <li>{t('homepage.p11')}</li>
                        <li>{t('homepage.p12')}</li>
                    </ul>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/CO2.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <p className="font-bold py-2">{t('homepage.h12')}</p>
                    <ul class="list-disc pl-6 space-y-2 py-2">
                        <li>{t('homepage.p13')}</li>
                    </ul>
                    <p className="font-bold py-2">{t('homepage.h13')}</p>
                    <ul class="list-disc pl-6 space-y-2 py-2">
                        <li>{t('homepage.p14')}</li>
                    </ul>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/Argon.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <p>
                    {t('homepage.p15')}
                    </p>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/Jingweitip.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <h1 className="text-[30px] font-bold">
                    {t('homepage.h14')}
                    </h1>
                    <div className="flex justify-center items-center py-12">
                        <img src='/images/page_images/WP.png' className="xl:max-w-[1200px]"></img>
                    </div>
                    <p>
                    {t('homepage.p16')}
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
                    <a href="https://anyflip.com/uggut/ubmb/" className="text-[30px] text-[#FFFF00]">{t('homepage.h15')}</a>
                    <div className="flex justify-center items-center pb-8">
                        <img src='/images/page_images/Book.png' className="w-[350px]"></img>
                    </div>
                    <p className="py-10 font-bold text-[20px]">{t('homepage.h16')}</p>
                    <div className="text-[#E4403C] pb-8 text-[17px]">
                        <p>{t('homepage.p17')}</p>
                        <p>{t('homepage.p18')}</p>
                        <p>{t('homepage.p19')}</p>
                        <p>{t('homepage.p20')}</p>
                    </div>
                    <div className="">
                        <QRcodeComponent />
                        <p className="text-start py-8 text-black px-[100px]">
                        {t('homepage.h17')}
                        </p>
                    </div>
                </div>

                <div ref={section2Ref}></div>
                <ItemList />

                <CategorySearch />

                <div ref={section3Ref}></div>
                <RecommendProductList />

                <div className="bg-[#FFD600] md:flex px-[10%] py-4 md:justify-between ">
                    <div className="bg-white mb-10 md:mb-0 md:w-[30%]" >
                        <img src='/images/page_images/WeldingMC.png' className="w-[100%]"></img>
                        <h1 className="text-[20px] text-center p-4">{t('homepage.h18')}</h1>
                        <p className="px-4 pb-8">{t('homepage.p21')}</p>
                    </div>
                    <div className="bg-white mb-10 md:mb-0 md:w-[30%]">
                        <img src='/images/page_images/TorchSerPana.png' className="w-[100%]"></img>
                        <h1 className="text-[20px] text-center p-4">{t('homepage.h19')}</h1>
                        <p className="px-4 pb-8">{t('homepage.p22')}</p>
                    </div>
                    <div className="bg-white md:w-[30%]">
                        <img src='/images/page_images/Robot.png' className="w-[100%]"></img>
                        <h1 className="text-[20px] text-center p-4">{t('homepage.h20')}</h1>
                        <p className="px-4 pb-8">{t('homepage.p23')}</p>
                    </div>
                </div>

                <div ref={section4Ref} className="px-[12%] py-[100px] flex justify-between">
                    <div className="w-[50%]">
                        <div className="py-3 flex flex-wrap">
                            <MdBusinessCenter className="mt-[2px] mr-4" />
                            <p>{t('homepage.p24')}</p>
                        </div>
                        <Contact />
                    </div>
                    <div className="mx-[auto] my-[auto] w-[45%]" >
                        <iframe className="w-[400px] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15493.791027039693!2d100.4626156!3d13.8721544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29aca882d796f%3A0xed3662f97b98ac95!2sRILON!5e0!3m2!1sth!2sth!4v1679737367033!5m2!1sth!2sth" ></iframe>
                        {/* <button className="bg-[#E2B22C] text-white py-1 px-6 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">นำทาง</button> */}
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default HomePage