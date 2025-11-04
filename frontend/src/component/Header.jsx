import React from 'react'

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
       
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#FFC247]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-900" fill="currentColor" aria-hidden="true">
              <path d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8a8 8 0 110-16zm0 3.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 2.2a2.6 2.6 0 110 5.2 2.6 2.6 0 010-5.2z" />
            </svg>
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">Certo</span>
        </a>

      
        <nav className="hidden items-center text-sm font-semibold text-slate-700 md:flex">
          <a href="#" className="hover:text-slate-900">iPhone</a>
          <span className="mx-4 text-slate-300">•</span>
          <a href="#" className="hover:text-slate-900">Android</a>
          <span className="mx-4 text-slate-300">•</span>
          <a href="#" className="hover:text-slate-900">Help</a>
          <span className="mx-4 text-slate-300">•</span>
          <button className="inline-flex items-center hover:text-slate-900">
            <span>Company</span>
            <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
          </button>
        </nav>

     
        <div className="ml-auto md:ml-0">
          <a href="#" className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-500/50 transition hover:bg-indigo-500">
            Sign in
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header