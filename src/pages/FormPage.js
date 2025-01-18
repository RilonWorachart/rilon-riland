import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tel: '',
    line: '',
    position: '',
    province: '',
    time: '',
    message: '',
    requirement: {
      รายละเอียด: false,
      ใบเสนอราคา: false,
      วิธีแก้ปัญหาการใช้งาน: false,
      ข้อมูลการจัดส่งสินค้า: false,
      ทดสอบใช้สินค้าเเละบริการ: false,
      ต้องการให้พนักงานขายติดต่อกลับ: false,
      ตัวแทนจัดจำหน่าย: false,
    },
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Handle checkbox values
      setFormData({
        ...formData,
        requirement: {
          ...formData.requirement,
          [name]: checked,
        },
      });
    } else {
      // Handle text inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare selected data
    const selectedData = Object.keys(formData.requirement)
      .filter((key) => formData.requirement[key])
      .map((key) => key.replace('requirement', ''));

    const finalFormData = {
      ...formData,
      selectedData: selectedData.join(', '), // Add selected checkboxes as a comma-separated string
    };

    // Use the environment variables for EmailJS IDs
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, finalFormData, userId)
      .then(
        (response) => {
          setStatusMessage('Email sent successfully!');
          setFormData({
            name: '',
            email: '',
            company: '',
            tel: '',
            line: '',
            position: '',
            province: '',
            time: '',
            message: '',
            requirement: {
              รายละเอียด: false,
              ใบเสนอราคา: false,
              วิธีแก้ปัญหาการใช้งาน: false,
              ข้อมูลการจัดส่งสินค้า: false,
              ทดสอบใช้สินค้าเเละบริการ: false,
              ต้องการให้พนักงานขายติดต่อกลับ: false,
              ตัวแทนจัดจำหน่าย: false,
            },
          });
        },
        (error) => {
          setStatusMessage('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen font-plex-sans-thai">
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Email Field */}
                <div className="pt-4">
                  <label htmlFor="email" className="font-semibold py-1">อีเมล<span className="text-[#DC3545]">*</span></label><br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Company Field */}
                <div className="pt-4">
                  <label htmlFor="company" className="font-semibold py-1">บริษัท</label><br />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
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
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    pattern="^[0-9-+\s()]*$" maxLength="16" minLength="6" required className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>


                {/* Line Field */}
                <div className="pt-4">
                  <label htmlFor="line" className="font-semibold py-1">ไลน์ไอดี</label><br />
                  <input
                    type="text"
                    id="line"
                    name="line"
                    value={formData.line}
                    onChange={handleChange}
                    className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
                </div>

                {/* Position Field */}
                <div className="pt-4">
                  <label htmlFor="position" className="font-semibold py-1">ตำเเหน่ง</label><br />
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="border w-[100%] py-1.5 pl-3 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
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
              <label htmlFor="requirement" className="font-semibold py-1">ข้อมูลที่ต้องการ<span className="text-[#DC3545]">*</span></label><br />
              <input type="checkbox" id="รายละเอียด" name="รายละเอียด" checked={formData.requirement.รายละเอียด} onChange={handleChange} required className="mr-2" />
              <label htmlFor="รายละเอียด">รายละเอียด</label><br />
              <input type="checkbox" id="ใบเสนอราคา" name="ใบเสนอราคา" checked={formData.requirement.ใบเสนอราคา} onChange={handleChange} required className="mr-2" />
              <label htmlFor="ใบเสนอราคา">ใบเสนอราคา</label><br />
              <input type="checkbox" id="วิธีแก้ปัญหาการใช้งาน" name="วิธีแก้ปัญหาการใช้งาน" checked={formData.requirement.วิธีแก้ปัญหาการใช้งาน} onChange={handleChange} required className="mr-2" />
              <label htmlFor="วิธีแก้ปัญหาการใช้งาน">วิธีแก้ปัญหาการใช้งาน</label><br />
              <input type="checkbox" id="ข้อมูลการจัดส่งสินค้า" name="ข้อมูลการจัดส่งสินค้า" checked={formData.requirement.ข้อมูลการจัดส่งสินค้า} onChange={handleChange} required className="mr-2" />
              <label htmlFor="ข้อมูลการจัดส่งสินค้า">ข้อมูลการจัดส่งสินค้า</label><br />
              <input type="checkbox" id="ทดสอบใช้สินค้าเเละบริการ" name="ทดสอบใช้สินค้าเเละบริการ" checked={formData.requirement.ทดสอบใช้สินค้าเเละบริการ} onChange={handleChange} required className="mr-2" />
              <label htmlFor="ทดสอบใช้สินค้าเเละบริการ">ทดสอบใช้สินค้าเเละบริการ</label><br />
              <input type="checkbox" id="ต้องการให้พนักงานขายติดต่อกลับ" name="ต้องการให้พนักงานขายติดต่อกลับ" checked={formData.requirement.ต้องการให้พนักงานขายติดต่อกลับ} onChange={handleChange} required className="mr-2" />
              <label htmlFor="ต้องการให้พนักงานขายติดต่อกลับ">ต้องการให้พนักงานขายติดต่อกลับ</label><br />
              <input type="checkbox" id="ตัวแทนจัดจำหน่าย" name="ตัวแทนจัดจำหน่าย" checked={formData.requirement.ตัวแทนจัดจำหน่าย} onChange={handleChange} required className="mr-2" />
              <label htmlFor="ตัวแทนจัดจำหน่าย">ตัวแทนจัดจำหน่าย</label><br />
            </div>

            {/* Other Information */}
            <div className="pt-4">
              <label htmlFor="message" className="font-semibold py-1">อื่นๆ</label><br />
              <textarea id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                cols="50"
                className="border w-[100%] px-3 py-1 my-1 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 transition duration-300" />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-5">
              <Link to={`/catalog/item/${id}`}>
                <button type="button" className="py-1 px-2 mx-2 text-[#DC3545] border border-[#DC3545] hover:text-white hover:bg-[#DC3545]  transition duration-300">ยกเลิก</button>
              </Link>
              <input type="submit" value="ส่งคำขอ" className="py-1 px-2 text-[#28A745] border border-[#28A745] hover:text-white hover:bg-[#28A745]  transition duration-300" />
            </div>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FormPage;
