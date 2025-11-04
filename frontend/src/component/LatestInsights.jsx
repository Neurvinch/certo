import React from 'react'
import img1 from "../assets/8c40de2826ced00dc3e9ea5fe7f62fe9b9d1f064.png"
import img2 from "../assets/a8d18195ea951a4796effc856945ecd38f58bde2.png"
import img3 from "../assets/7a00a277fd45e1a196b9f8501d8d6e175e4f02eb.png"

const defaultPosts = [
  {
    tag: 'Expertise',
    title: 'Signs Your Ex Is Spying On You',
    excerpt: "In an ideal world, after a relationship ends both you and your ex will move on. But what if they can't let go, and start spying on your...",
    imageUrl: img1
  },
  {
    tag: 'Guides',
    title: 'How to Remove a Hacker from Your Samsung Phone',
    excerpt: "Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.23% compared to Apple’s 28.43% as...",
    imageUrl: img2
  },
  {
    tag: 'Expertise',
    title: 'Is Your Cell Phone Under Surveillance?',
    excerpt: "In today’s surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...",
    imageUrl: img3
  }
]

const CardImage = ({ imageUrl }) => {
  if (!imageUrl) {
    return (
      <div className="h-36 w-full rounded-t-2xl bg-linear-to-br from-slate-300 to-slate-200" />
    )
  }
  return (
    <img src={imageUrl} alt="" className="h-36 w-full rounded-t-2xl object-cover" />
  )
}

const LatestInsights = ({ posts = defaultPosts, onViewAll }) => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Latest insights</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <article key={idx} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative">
                <CardImage imageUrl={p.imageUrl} />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">{p.tag}</span>
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-lg font-extrabold text-slate-900">{p.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button onClick={onViewAll} className="inline-flex items-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-amber-300 transition hover:bg-amber-300">
            <span>View all insights</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-4 w-4"><path fillRule="evenodd" d="M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L18.94 12l-5.22-5.22a.75.75 0 010-1.06z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 12a.75.75 0 01.75-.75h15.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestInsights
