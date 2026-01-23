import React from 'react'
import './App.css'
import SectionHeader from './components/SectionHeader'
import SectionFullStackBxl from './pages/SectionFullStackBxl'
import SectionAboutMe from './pages/SectionAboutMe'
import SectionSkills from './pages/SectionSkills'
// import SectionProjects from './pages/SectionProjects'
// import SectionMoreMe from './pages/SectionMoreMe'
import SectionFooter from './components/SectionFooter'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-800">
      <SectionHeader />
      <main className="flex-grow">
        <SectionFullStackBxl />
        <SectionAboutMe />
        <SectionSkills />
        {/* <SectionProjects /> */}
        {/* <SectionMoreMe />  */}
      </main>
      <SectionFooter />
    </div>
  )
}

export default App
