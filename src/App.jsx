import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Interview from './pages/Interview'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
