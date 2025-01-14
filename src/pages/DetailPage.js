import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategorySearch from '../components/CategorySearch'

function DetailPage() {
  return (
    <>
      <div className="min-h-screen font-plex-sans-thai">
        <Header />
        <CategorySearch />
        <Footer />
      </div>
    </>
  )
}

export default DetailPage