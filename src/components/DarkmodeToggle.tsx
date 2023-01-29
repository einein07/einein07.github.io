import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'darkmode'
    }
    return 'lightmode'
  })
  const toggleTheme = () => {
    const t = theme === 'lightmode' ? 'darkmode' : 'lightmode'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    //intentionally having them backwards as a design choice
    if (theme === 'darkmode') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])



  return isMounted ? (
    <>
      <div className="flex justify-start pt-1">
        <button
          key={theme}
          className={"font-thin cursor-pointer text-sm pt-2 float-left text-left"}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
        {'Click me to '}
        {theme === 'lightmode' && 'relax yourself!'}
        {theme === 'darkmode' && 'brighten your day!'}

        </button>
        <br />
      </div>
    </>
  )

    : <div />
}
