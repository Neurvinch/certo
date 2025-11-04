import React from 'react'

const StoryHelp = () => {
  return (
    <section className="bg-white py-14 sm:py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[300px]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-linear-to-br from-[#FFD36A] to-[#F3A93F] p-8 text-[#02033B] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)] sm:p-10">
            <h3 className="text-xl font-extrabold">Read our story</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#15184A]">
              Find out why thousands trust Certo to secure their mobile world.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center rounded-full bg-[#4335DE] px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-[#4335DE]/50 transition hover:bg-[#3b2fcb]">
                <span>About us</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-4 w-4"><path fillRule="evenodd" d="M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L18.94 12l-5.22-5.22a.75.75 0 010-1.06z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 12a.75.75 0 01.75-.75h15.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div className="pl-2">
            <h3 className="text-xl font-extrabold text-[#02033B]">Help Center</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Help topics, getting started guides and FAQs.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center rounded-full border-2 border-[#02033B] px-5 py-3 text-sm font-bold text-[#02033B] transition hover:bg-slate-50">
                Visit help center
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryHelp
