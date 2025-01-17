import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';

function FormPage() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data
    fetch('/allproduct.json')
      .then(response => response.json())
      .then(result => {
        const foundProduct = result.find(item => item.id === parseInt(id));
        setProductData(foundProduct);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  // Fetch province options
  useEffect(() => {
    fetch('/province.json')
      .then(response => response.json())
      .then(data => {
        setProvinceOptions(data);
        setLoading(false); // Once data is fetched, stop loading
      })
      .catch(error => {
        console.error('Error fetching province data:', error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., sending data to a server)
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen font-plex-sans-thai">
      <Header />

      <div className="mt-[70px] bg-[#E2B22C] text-white px-3 xl:px-24 py-3 md:flex md:justify-between md:items-center">
        <p className="py-1">
          <Link to="/" className="hover:text-[#00007E]">หน้าแรก</Link> <span> » </span>
          <Link to="/catalog" className="hover:text-[#00007E]">แคตตาล็อกออนไลน์</Link> <span> » </span>
          <Link to={`/catalog/item/${id}`} className="hover:text-[#00007E]">{productData.name}</Link>
          <span> » ขอรายละเอียดเพิ่มเติม</span>
        </p>
        <h2 className="py-1 text-[20px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h2>
      </div>

      <div className="mx-[10%] max-w-[1400px] 2xl:mx-[auto] pt-4 pb-10">
        <div>
          <h1 className="text-[30px]">ขอรายละเอียดเพิ่มเติม</h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C]" />
        </div>

        <p className="text-[28px] pt-[28px]">
          <span>ชื่อสินค้า: </span>
          <span>{productData.name}</span>
        </p>

        <div className="my-[10px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
          <div className="text-center">
            <h1 className="text-[30px]">กรุณากรอกข้อมูล</h1>
            <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C] m-[auto]" />
          </div>

          <form className="py-6" onSubmit={handleSubmit}>
            <div className="md:flex">

              <div className="md:w-[50%] md:pr-[10px]">
                {/* Name Field */}
                <div className="pt-4">
                  <label htmlFor="name" className="font-semibold py-1">ชื่อผู้ติดต่อ<span className="text-[#DC3545]">*</span></label><br />
                  <input type="text" id="name" name="name" required className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Email Field */}
                <div className="pt-4">
                  <label htmlFor="email" className="font-semibold py-1">อีเมล<span className="text-[#DC3545]">*</span></label><br />
                  <input type="email" id="email" name="email" required className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Company Field */}
                <div className="pt-4">
                  <label htmlFor="company" className="font-semibold py-1">บริษัท</label><br />
                  <input type="text" id="company" name="company" className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Province Select */}
                <div className="pt-4">
                  <label htmlFor="province" className="font-semibold py-1">จังหวัด<span className="text-[#DC3545]">*</span></label><br />
                  {loading ? (
                    <p>Loading provinces...</p>
                  ) : (
                    <select name="province" id="province" className="border w-[100%] py-1 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300">
                      {provinceOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

              </div>

              <div className="md:w-[50%] md:pl-[10px]">
                {/* Phone Field */}
                <div className="pt-4">
                  <label htmlFor="tel" className="font-semibold py-1">โทรศัพท์<span className="text-[#DC3545]">*</span></label><br />
                  <input type="tel" id="tel" name="tel" pattern="^[0-9-+\s()]*$" maxLength="16" minLength="6" required className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>


                {/* Line Field */}
                <div className="pt-4">
                  <label htmlFor="line" className="font-semibold py-1">ไลน์ไอดี</label><br />
                  <input type="text" id="line" name="line" className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Position Field */}
                <div className="pt-4">
                  <label htmlFor="position" className="font-semibold py-1">ตำเเหน่ง</label><br />
                  <input type="text" id="position" name="position" className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Time Select */}
                <div className="pt-4">
                  <label htmlFor="time" className="font-semibold py-1">ระยะเวลาที่ต้องการใช้สินค้า</label><br />
                  <select name="time" id="time" className="border w-[100%] py-1 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300">
                    <option value="ไม่ระบุ">เลือก</option>
                    <option value="ต้องการใช้ทันที">ต้องการใช้ทันที</option>
                    <option value="ภายใน 2 วัน">ภายใน 2 วัน</option>
                    <option value="ภายใน 1 อาทิตย์">ภายใน 1 อาทิตย์</option>
                    <option value="ภายใน 2 อาทิตย์">ภายใน 2 อาทิตย์</option>
                    <option value="ภายใน 1 เดือน">ภายใน 1 เดือน</option>
                    <option value="ภายใน 2 เดือน">ภายใน 2 เดือน</option>
                    <option value="ภายใน 3 เดือน">ภายใน 3 เดือน</option>
                    <option value="ภายใน 4 เดือน">ภายใน 4 เดือน</option>
                    <option value="ภายใน 5 เดือน">ภายใน 5 เดือน</option>
                    <option value="ภายใน 6 เดือน">ภายใน 6 เดือน</option>
                    <option value="ภายใน 12 เดือน">ภายใน 12 เดือน</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Data Checkbox Fields */}
            <div className="pt-4">
              <label htmlFor="data" className="font-semibold py-1">ข้อมูลที่ต้องการ<span className="text-[#DC3545]">*</span></label><br />
              <input type="checkbox" id="data1" name="data1" required className="mr-2" />
              <label htmlFor="data1">รายละเอียด</label><br />
              <input type="checkbox" id="data2" name="data2" required className="mr-2" />
              <label htmlFor="data2">ใบเสนอราคา</label><br />
              <input type="checkbox" id="data3" name="data3" required className="mr-2" />
              <label htmlFor="data3">วิธีแก้ปัญหาการใช้งาน</label><br />
              <input type="checkbox" id="data4" name="data4" required className="mr-2" />
              <label htmlFor="data4">ข้อมูลการจัดส่งสินค้า</label><br />
              <input type="checkbox" id="data5" name="data5" required className="mr-2" />
              <label htmlFor="data5">ทดสอบใช้สินค้า/บริการ</label><br />
              <input type="checkbox" id="data6" name="data6" required className="mr-2" />
              <label htmlFor="data6">ต้องการให้พนักงานขายติดต่อกลับ</label><br />
              <input type="checkbox" id="data7" name="data7" required className="mr-2" />
              <label htmlFor="data7">ตัวแทนจัดจำหน่าย</label><br />
            </div>

            {/* Other Information */}
            <div className="pt-4">
              <label htmlFor="other" className="font-semibold py-1">อื่นๆ</label><br />
              <textarea id="other" name="other" rows="4" cols="50" className="border w-[100%] px-3 py-1 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-5">
              <Link to={`/catalog/${id}`}>
                <button type="button" className="py-1 px-2 mx-2 text-[#DC3545] border border-[#DC3545] hover:text-white hover:bg-[#DC3545]  transition duration-300">ยกเลิก</button>
              </Link>
              <input type="submit" value="ส่งคำขอ" className="py-1 px-2 text-[#28A745] border border-[#28A745] hover:text-white hover:bg-[#28A745]  transition duration-300" />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FormPage;
