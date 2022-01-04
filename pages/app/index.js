import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Stat from '../../components/Card/Stat'

const Dashboard = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen px-4">
            <Head>
                <title>Expense Tracker</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-full w-full p-4 flex">
                <div className="w-9/12 p-4">
                    <div>
                        <h1 className="font-bold text-2xl">Dashboard</h1>
                        <p className="text-gray-400 text-base">Hello Mukul, Welcome to expenser</p>
                    </div>
                    <div className="flex">
                        <Stat title="Spend" value="2324" />
                        <Stat title="Income" value="43534" />
                    </div>
                </div>
                <div className="w-3/12">

                    <div className="bg-gray-100 rounded-2xl flex justify-center items-center flex-col p-8 mb-4">
                        <div className="border-2 border-dashed border-blue-400 rounded-full p-2 mb-4">
                            <img src="/hero.jpg" className="rounded-full h-28" />
                        </div>
                        <h1 className="font-bold">Mukul R.</h1>
                        <p className="text-gray-400 text-xs mb-4">mukulrajpoot262610@gmail.com</p>
                        <div className="flex">
                            <i className="fas fa-bell p-2 mx-2 text-white bg-blue-400 rounded-full"></i>
                            <i className="fas fa-cog p-2 mx-2 text-white bg-blue-400 rounded-full"></i>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-8">
                        <div className="w-1/3">
                            <img src="/export.svg" />
                        </div>
                        <div className="w-2/3 pl-4">
                            <h1 className="text-xs font-bold mb-1">Recipt Data</h1>
                            <p className="text-xs mb-2 text-gray-400">Do you want to export your data?</p>
                            <button className="text-xs p-1 border-dashed border border-blue-400 text-blue-400 px-4 font-bold rounded-2xl">Export</button>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default Dashboard