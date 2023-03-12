import React from 'react'

const thing = "hi"

export default function NavBar() {
  return (
    <div className="grid place-items-left pt-4">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )
}

