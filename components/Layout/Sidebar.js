import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Sidebar = () => {

    const router = useRouter()

    const [route, setRoute] = useState('/app')

    useEffect(() => {
        setRoute(router.pathname)
    }, [router])

    return (
        <div className="fixed z-50 h-full w-2/12 p-4 bg-white border-r">
            <div className="h-full w-full rounded-2xl p-2">
                <h1 className="font-black text-2xl my-4">EXPENSER</h1>

                <div className="flex justify-center flex-col items-center my-10">
                    <div className="bg-red-300 rounded-full p-6 inline-block">
                        <h1 className="font-bold text-2xl">MR</h1>
                    </div>
                    <h1 className="mt-3 font-bold">Mukul R.</h1>
                    <h1 className="text-xs text-gray-400">Developer</h1>
                </div>

                <h1 className="text-gray-400 mt-8 text-xs uppercase font-bold">Main Menu</h1>

                <div className="">
                    <div className={`flex items-center cursor-pointer mt-4  p-4 rounded-2xl ${route === '/app' ? "bg-black text-white font-bold" : ""} `}>
                        <i className="fas text-xl fa-home"></i>
                        <h1 className="ml-4">Overview</h1>
                    </div>
                    <div className={`p-4 rounded-2xl flex items-center cursor-pointer ${route === '/app/stats' ? "bg-black text-white font-bold" : ""} `}>
                        <i className="fas text-xl fa-chart-pie"></i>
                        <h1 className="ml-4">Stats</h1>
                    </div>
                    <div className={`p-4 rounded-2xl flex items-center cursor-pointer ${route === '/app/add-transaction' ? "bg-black text-white font-bold" : ""} `}>
                        <i className="far text-xl fa-plus-square"></i>
                        <h1 className="ml-4">Add Transaction</h1>
                    </div>
                    <div className={`p-4 rounded-2xl flex items-center cursor-pointer ${route === '/app/add-budget' ? "bg-black text-white font-bold" : ""} `}>
                        <i className="far text-xl fa-plus-square"></i>
                        <h1 className="ml-4">Add Budget</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
