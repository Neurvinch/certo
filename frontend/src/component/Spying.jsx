import React from 'react'

const Spying = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#2925CC] to-[#4B48E5] py-16 sm:py-20">
      <div className="mx-auto min-w-[1440px] max-h-[] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Is someone spying on your phone?
        </h2>
        <p className="mt-3 text-sm text-white/80 sm:text-base">Find out with Certo</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-[#02033B] shadow-sm ring-1 ring-amber-300 transition hover:bg-amber-300">
            <span>Get Certo for iPhone</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-4 w-4"><path fillRule="evenodd" d="M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L18.94 12l-5.22-5.22a.75.75 0 010-1.06z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 12a.75.75 0 01.75-.75h15.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
            Get Certo for Android
          </a>
        </div>
      </div>
    </section>
  )
}

export default Spying