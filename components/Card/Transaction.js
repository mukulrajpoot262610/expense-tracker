import React from 'react'

const Transaction = ({ type }) => {
    return (
        <div className={`${type === 'income' ? "border-green-500" : "border-red-500"} w-full flex items-center border-2 p-4 rounded-2xl mb-4 bg-gray-100`}>
            <img src="/trans.jpg" alt="" className="rounded-full h-12 mr-4" />
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="font-bold">$455</h1>
                    <p className="text-xs text-gray-400">Clash Royale Pass</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-400">Date</p>
                    <h1 className="font-bold">03 Jan 2022</h1>
                </div>
            </div>
        </div>
    )
}

export default Transaction
