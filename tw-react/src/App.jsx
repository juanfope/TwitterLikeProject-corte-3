import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const navigation_event = "pushstate"

function navigate (href){
  window.history.pushState({}, "", href)
  const navigationEvent = new Event(navigation_event)
  window.dispatchEvent(navigationEvent)
}

function HomePage (){
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la HomePage</p>
      <button onClick={() => navigate("/about")}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage (){
  return (
    <>
      <h1>About</h1>
      <p>Mi nombre es john alejandro y soy esquizofrenico</p>
      <button onClick={() => navigate("/")}>Ir a home</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
  
    window.addEventListener(navigation_event, onLocationChange)

    return() => {
      window.removeEventListener(navigation_event, onLocationChange)
    }
  }, [])
  
  return (
    <main>
      {currentPath == "/" && <HomePage />}
      {currentPath == "/about" && <AboutPage />}
    </main>
  )
}

export default App
