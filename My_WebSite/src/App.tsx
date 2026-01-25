import React from 'react'
import './App.css'
import SectionHeader from './components/SectionHeader'
import SectionFullStackBxl from './pages/SectionFullStackBxl'
import SectionAboutMe from './pages/SectionAboutMe'
import SectionSkills from './pages/SectionSkills'
import SectionContact from './pages/SectionContact'
import SectionFooter from './components/SectionFooter'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-800">
      <SectionHeader />
      <main className="flex-grow">
        <SectionFullStackBxl />
        <SectionAboutMe />
        <SectionSkills />
        <SectionContact />
      </main>
      <SectionFooter />
    </div>
  )
}

export default App
