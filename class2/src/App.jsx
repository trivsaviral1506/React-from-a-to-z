import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="post">
      <img src={heroImg} alt="Post" className="post-image" />

      <button onClick={() => setCount(count + 1)}>
        Like {count}
      </button>
    </main>
    </>
  )
}

export default App
