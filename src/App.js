


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '/Users/Zsuzsi/Desktop/csaladfa2/src/pages/homepage.js'
import FormPage from '/Users/Zsuzsi/Desktop/csaladfa2/src/pages/formpage.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
