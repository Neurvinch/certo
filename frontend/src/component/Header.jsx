import React from 'react'

const Header = () => {
  return (
    <div className='items-start flex '>
      <div className='flex gap-5'>
        <div>logo</div>
        <div className='font-extrabold'>Certo</div>
      </div>
      

      <div className='font-semibold flex justify-between px-70 '>
        <div className=' gap-6'>iphone</div>

        <div className='gap-6'>Android</div>
        <div>Help</div>
        <div>Company <spam>^</spam></div>
         <div>
            <button className="bg-[#4335DE] font-bold  rounded 
            border-2 r">
              Sign In
            </button>

         </div>
        
      </div>
      
    </div>
  )
}

export default Header