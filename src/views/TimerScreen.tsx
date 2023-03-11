import React from 'react'
import AppBar from '@/components/AppBar'
import Timer from '@/components/Timer'
export default function TimerScreen() {
  return (
    <div className="body flex flex-col justify-center w-full h-[100vh] items-center">
        <AppBar />
        <Timer />
    </div>
  )
}
