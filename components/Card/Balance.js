import React from 'react'

const Balance = () => {
    return (
        <div className="">
            <div className="m-auto bg-red-100 rounded-xl relative text-white shadow-2xl">

                <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />

                <div className="w-full absolute top-0 p-4">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs">
                                Name
                            </p>
                            <p className="font-medium tracking-widest text-2xs">
                                Mukul R.
                            </p>
                        </div>
                        <img className="w-12 h-12" src="https://i.imgur.com/bbPHJVe.png" />
                    </div>

                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light text-xs">
                                Net Balance
                            </p>
                            <p className="font-medium text-2xl">
                                $230200
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Balance
