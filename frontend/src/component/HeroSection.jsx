import React from 'react'
import  Img from "../assets/ab77a2134011d07a7bbcc6283b6f3a9d23c5510b.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[140%] w-[70%] -translate-y-1/4 rounded-[50%] bg-gradient-to-b from-slate-50 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#02033B] sm:text-5xl">
              Your mobile privacy
              <br />
              is our mission
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-[#02033B] shadow-sm ring-1 ring-amber-300 transition hover:bg-amber-300">
                <span>Get Certo for iPhone</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-4 w-4">
                  <path fillRule="evenodd" d="M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L18.94 12l-5.22-5.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 12a.75.75 0 01.75-.75h15.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border-2 border-[#02033B] px-5 py-3 text-sm font-bold text-[#02033B] transition  hover:bg-slate-50 ">
                Get Certo for Android
              </a>
            </div>
          </div>

          <div className="relative">
           
                 
                  <img src={Img} alt="a mobile pic "/>
                

              
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection