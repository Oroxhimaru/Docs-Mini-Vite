import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
        <nav className='absolute top-[5%]  w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents.</nav>
           <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[13vw] leading-none tracking-tighter text-zinc-900'>Docs.</h1>
      </div>
    </>
  )
}

export default Background