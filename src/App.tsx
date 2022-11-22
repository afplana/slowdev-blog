import React, { FC } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Submenu from './components/Submenu'

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Submenu />
    </>
  )
}

export default App