import React from 'react'

const Stat = ({ title, value }) => {
    return (
        <div className="w-full min-w-60 bg-gray-100 p-8 mx-2 my-4 rounded-2xl shadow-sm">
            <h1 className="font-bold">{title}</h1>
            <h1 className="font-bold text-4xl my-3">${value} <span className="text-gray-400 text-xs">on this month</span></h1>
        </div>
    )
}

export default Stat
