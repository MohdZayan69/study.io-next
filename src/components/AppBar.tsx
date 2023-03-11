import React from 'react'
import Image from 'next/image'
import UserIcon from "../../public/userIcon.svg"
export default function appBar() {
  return (
    <>
    <div className='fixed top-[8px] left-[50%] translate-x-[-50%]'>
      <div className='flex flex-row'>
        <ul className='flex gap-[8px] flex-row w-full h-full justify-around items-center'>
          <li className='font-bold'>
            <button className='element primary'>Timer</button>
          </li>
          <li className='font-bold'>
            <button className='element'>Notes</button>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}
