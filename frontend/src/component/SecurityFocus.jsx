import React from 'react'
import img1 from "../assets/c6a22b9d0c04efcf607e9c34b8d6035c48e5d400.png"

const SecurityFocus = ({
  title = "At Certo, mobile security is not an afterthought, it’s what we do.",
  description = "With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.",
  imageUrl = img1,
}) => {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#02033B] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-[#02033B] shadow-sm ring-1 ring-amber-300 transition hover:bg-amber-300">
                <span>Get Certo for iPhone</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-4 w-4"><path fillRule="evenodd" d="M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L18.94 12l-5.22-5.22a.75.75 0 010-1.06z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 12a.75.75 0 01.75-.75h15.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border-2 border-[#02033B] px-5 py-3 text-sm font-bold text-[#02033B] transition hover:bg-slate-50">
                Get Certo for Android
              </a>
            </div>
          </div>

          
          <div className="relative">
            <div className="rounded-xl border-2 border-slate-200 p-2">
              <div className="relative rounded-lg ring-4 ring-[#FFC247]">
                {imageUrl ? (
                  <img src={imageUrl} alt="Happy person using phone" className="block h-full w-full rounded-lg object-cover" />
                ) : (
                  <div className="aspect-4/3 w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityFocus
