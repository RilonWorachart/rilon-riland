import Header from '../components/Header'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'
import CatalogDetail from '../components/itempage/CatalogDetail'
import Contact from '../components/Contact'


function ItemPage() {
    return (
        <>
            <div className="min-h-screen font-plex-sans-thai">
                <Header />

                <CatalogDetail />
                <div className="mx-[80px] my-[30px] px-[20px] py-[10px] border-[1px] border-lightgray rounded-md">
                    <div className="pb-4">
                        <h1 className="text-[30px]">
                            ข้อมูลติดต่อ
                        </h1>
                        <div className="text-[#E2B22C] h-[3px] w-[60px] bg-[#E2B22C]" />
                    </div>
                    <div className="px-4">
                        <Contact />
                    </div>
                </div>

                <CategorySearch />
                <Footer />
            </div>
        </>
    )
}

export default ItemPage