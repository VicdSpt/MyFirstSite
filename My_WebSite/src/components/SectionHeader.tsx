import React from 'react'

function SectionHeader() {
  return (
    <header className='fixed top-0 w-full z-10 bg-slate-200'>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className='flex gap-4 lg:gap-6'>
            <a href="">Home</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
        </nav>
        <div>
            <a href="">
                <button>Download My CV</button>
            </a>
        </div>
      </div>
    </header>
  )
}

export default SectionHeader
