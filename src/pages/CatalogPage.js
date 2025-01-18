import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import ItemList from '../components/ItemList'
import SearchKeyButton from '../components/SearchKeyButton'

import { Link } from 'react-router-dom'


function CatalogPage() {

  return (
    <>
      <div className="min-h-screen font-plex-sans-thai">
        <div className="mt-[70px] bg-[#E2B22C] text-white px-3 xl:px-24 py-3 ">
          <p className="py-1">
            <Link to="/">
              <span className="hover:text-[#00007E]">หน้าแรก</span>
            </Link>
            <span> » </span>
            <span className="">แคตตาล็อกออนไลน์</span>
          </p>
          <h2 className="py-1 text-[20px]">เครื่องเชื่อมไรล่อน วรชาติกรุ๊ป</h2>
        </div>


        <div className="flex justify-end">
          <SearchKeyButton />
        </div>

        <ItemList/>


        <CategorySearch />
        <Footer />
      </div>
    </>
  )
}

export default CatalogPage