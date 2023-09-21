import { Routes, Link, Route } from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import ChartPage from './components/Pages/ChartPage'
import NavBar from './components/NavBar/NavBar'
import UserPage from './components/Pages/UserPage'

function App() {
  // const [count, setCount] = useState(0)
  // const apiKey = `patI4kk7dafbqUIZ4.a95b22f12008b4aa88b669db515a62b0196f0704941a8e83fbd02df8d4890104`

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/coin/:id" element={<ChartPage />}/>
        <Route path="/user" element={<UserPage />}/>
      </Routes>
    </>
  )
}

export default App
