import { useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import PageLayout from './Layout/PageLayout'
import SignIn from './sections/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
  <PageLayout/>
 )
}

export default App
