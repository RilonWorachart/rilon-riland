import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function CategorySearch() {
  const { t } = useTranslation();

  return (
    <>
      <div className="px-[100px]">
        <div>
          <h1 className="pt-2 text-[30px] text-center">
            {t('search.p1')}
          </h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-[auto] py-10" >
          <Link to={`/catalog/keyword/${t('search.p2')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300 inline-block">{t('search.p2')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p3')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p3')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p4')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p4')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p5')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p5')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p6')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p6')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p7')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p7')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p8')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p8')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p9')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p9')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p10')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p10')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p11')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p11')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p12')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p12')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p13')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p13')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p14')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p14')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p15')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p15')}</button>
          </Link>
        </div>
      </div>

      <div className="px-[100px]">
        <div>
          <h1 className="pt-2 text-[30px] text-center">
            {t('search.p16')}
          </h1>
          <div className="text-[#E2B22C] h-[3px] w-[60px] text-center mx-[auto] bg-[#E2B22C]" />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-[auto] py-10" >
          <Link to={`/catalog/keyword/${t('search.p17')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p17')}</button>
          </Link>
          <Link to={`/catalog/keyword/${t('search.p18')}`}>
            <button className="bg-[#E2B22C] border text-white py-1 px-6 m-1 rounded-full hover:bg-white hover:text-[#42189F] hover:border hover:border-[#42189F] transition duration-300">{t('search.p18')}</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategorySearch