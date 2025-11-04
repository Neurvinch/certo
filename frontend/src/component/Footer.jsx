import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0A0F43] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
         <div>
            <h3 className="text-lg font-extrabold tracking-tight">Scan. Detect. Remove.</h3>

            <div className="mt-6 flex items-center gap-4">
           
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white"><path d="M19.633 7.997c.013.179.013.359.013.54 0 5.498-4.186 11.833-11.833 11.833-2.353 0-4.534-.686-6.372-1.87.33.038.647.051.99.051a8.36 8.36 0 005.183-1.783 4.183 4.183 0 01-3.905-2.9c.256.038.513.064.782.064.372 0 .744-.051 1.09-.141A4.175 4.175 0 012.83 9.7v-.051c.551.308 1.203.5 1.887.526A4.173 4.173 0 012.85 6.32c0-.77.205-1.477.564-2.095a11.87 11.87 0 008.61 4.367 4.712 4.712 0 01-.103-.957 4.172 4.172 0 017.217-2.853 8.213 8.213 0 002.648-1.01 4.18 4.18 0 01-1.835 2.299 8.347 8.347 0 002.402-.64 8.97 8.97 0 01-2.12 2.566z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white"><path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.09 5.657 21.247 10.438 22v-7.01H7.898v-2.917h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.47h-1.261c-1.244 0-1.63.773-1.63 1.564v1.877h2.773l-.443 2.917h-2.33V22C18.343 21.247 22 17.09 22 12.073z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white"><path d="M23.498 6.186a2.999 2.999 0 00-2.114-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.384.566a3 3 0 00-2.114 2.12C0 8.084 0 12 0 12s0 3.916.502 5.814a2.999 2.999 0 002.114 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.384-.566a3 3 0 002.114-2.12C24 15.916 24 12 24 12s0-3.916-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/></svg>
              </a>
            </div>

            <div className="mt-6 space-x-6 text-sm text-slate-300/80">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>

            <p className="mt-6 max-w-md text-xs leading-6 text-slate-400">
              Copyright © {new Date().getFullYear()} Certo Software Limited. Registered in England & Wales No. 10374299.
            </p>
            <p className="mt-1 text-xs text-slate-400">Designed & developed by Rogue Partner</p>
          </div>

         
          <div>
            <h4 className="text-xl font-extrabold">Certo</h4>
            <div className="mt-2 h-px w-16 bg-white/30" />
            <ul className="mt-6 space-y-4 text-slate-200">
              <li><a href="#" className="group inline-flex items-center gap-3 hover:underline text-[#FFC247]"><span className="h-0.5 w-3 bg-[#FFC247] group-hover:w-4 transition-all" />iPhone</a></li>
              <li><a href="#" className="group inline-flex items-center gap-3 hover:underline text-[#FFC247]"><span className="h-0.5 w-3 bg-[#FFC247] group-hover:w-4 transition-all" />Android</a></li>
              <li><a href="#" className="group inline-flex items-center gap-3 hover:underline text-[#FFC247]"><span className="h-0.5 w-3 bg-[#FFC247] group-hover:w-4 transition-all" />Help</a></li>
              <li><a href="#" className="group inline-flex items-center gap-3 hover:underline text-[#FFC247]"><span className="h-0.5 w-3 bg-[#FFC247] group-hover:w-4 transition-all" />About</a></li>
              <li><a href="#" className="group inline-flex items-center gap-3 hover:underline text-[#FFC247]"><span className="h-0.5 w-3 bg-[#FFC247] group-hover:w-4 transition-all" />Insights</a></li>
            </ul>
          </div>

          
          <div className="lg:pl-8">
            <div className="rounded-2xl border-4 border-indigo-700 bg-[#FFC247] p-6 text-slate-900 shadow-xl sm:p-8">
              <h5 className="text-lg font-extrabold">Sign up to our newsletter</h5>
              <p className="mt-2 text-sm text-slate-800/90">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox.</p>

              <form onSubmit={(e)=>e.preventDefault()} className="mt-4 flex gap-2">
                <input type="email" required placeholder="Email address" className="min-w-0 flex-1 rounded-full bg-white/90 px-4 py-2 text-sm text-slate-900 placeholder-slate-500 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-black/20" />
                <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800">Submit</button>
              </form>
            </div>
          </div>
        </div>

     
        <div className="mt-14 border-t border-white/10 pt-6 text-[11px] leading-5 text-slate-400">
          <p>
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
