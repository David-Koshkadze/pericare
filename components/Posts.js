import React from 'react'

export default function Posts() {
  return (
    <div className="text-center w-full mt-8 mb-8">
      <h1 className="heading-txt mb-5">სტატიები</h1>

      <div className="posts__grid">
        {[...new Array(6)].map((_, idx) => (
          <div key={idx} className="h-[250px] bg-emerald-600"></div>
        ))}
      </div>

    </div>
  )
}
