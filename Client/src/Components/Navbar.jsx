import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full mt-2'>
      <div className='ml-4 '>Resume Builder</div>
      <div>
        <ul className='flex gap-4 mr-10'>
            <button className='bg-[#c0e0ff] px-2 rounded text-[#0b99ff] py-[3px]'>PDF</button>
            <button className='bg-[#c0e0ff] px-2 rounded text-[#0b99ff] py-[3px]'>AI-Enhance</button>
            <button className='bg-[#c0e0ff] px-2 rounded text-[#0b99ff] py-[3px]'>Template Switch</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
