import './App.css'
import { Routes, Route } from 'react-router-dom'
import Resume from './views/Resume'
import Home from './views/Home'
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
