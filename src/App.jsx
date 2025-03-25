import './App.css'
import { Routes, Route } from 'react-router-dom'
import Resume from './views/Resume'
import Home from './views/Home'
import CoverLetter from './views/CoverLetter'
import Networking from './views/Networking'
import ProfessionalDevelopment from './views/ProfessionalDevelopment'
import ThankYouNote from './views/ThankYouNote'
import Interviewing from './views/Interviewing'
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/coverletter" element={<CoverLetter />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/interviewing" element={<Interviewing />} />
        <Route path="/professionaldevelopment" element={<ProfessionalDevelopment />} />
        <Route path="/thankyounote" element={<ThankYouNote />} />
      </Routes>
    </>
  )
}

export default App
