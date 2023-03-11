import React from 'react'

export default function Timer() {
  return (
    <>
    <div className="element effect bg-[#3C3C3C] primary w-[250px] h-[250px] flex relative  justify-center items-center">
        <div className=" flex justify-center text-center items-center text-[#3c3c3c] cursor-pointer duration-300 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] element bg-[#fff] w-[64px] h-[64px] block round translate-y-[50%] absolute bottom-0 ">
            Stop
        </div>
    </div>
    </>
  )
}
