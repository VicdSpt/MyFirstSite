import React from 'react'
import './App.css'
import SectionHeader from './components/SectionHeader'
import SectionFullStackBxl from './pages/SectionFullStackBxl'
import SectionAboutMe from './pages/SectionAboutMe'
// import SectionSkills from './pages/SectionSkills'
// import SectionProjects from './pages/SectionProjects'
// import SectionMoreMe from './pages/SectionMoreMe'
import SectionFooter from './components/SectionFooter'

function App() {
  return (
    <>
      <SectionHeader />
      <SectionFullStackBxl />
      <SectionAboutMe />
      {/* <SectionSkills /> */}
      {/* <SectionProjects /> */}
      {/* <SectionMoreMe />  */}
      <SectionFooter />
    </>
  )
}

export default App
