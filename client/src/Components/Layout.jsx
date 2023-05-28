import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import  { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>
          {title}
        </title>
      </Helmet>
      <Navbar />
      <main style={{ minHeight: "75vh" }}><Toaster/>{children}</main>
      <Footer />


    </>
  )
}

Layout.defaultProps = {
  title: 'Asset Tracker',
  description: 'That app can track corporate assets such as phones, tablets, laptops  and other gear handed out to employees.',
  keywords: 'phones, tablets, laptops, employees',
  author: 'Al Amin Fit'
}

export default Layout
