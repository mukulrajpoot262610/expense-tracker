import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">

            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            <div className="hidden lg:block w-2/12">
                <Sidebar />
            </div>
            <div className="w-full lg:w-10/12 flex justify-center">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
