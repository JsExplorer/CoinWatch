import FeaturedCoins from './components/FeaturedCoins/FeaturedCoins'
import { Routes, Link, Route } from 'react-router-dom'
import HomePage from './components/Pages/Homepage'
import ChartPage from './components/Pages/ChartPage'
import NavBar from './components/NavBar/NavBar'

function App() {
  // const [count, setCount] = useState(0)
  // const apiKey = `4d3b449d-acdb-484a-8bc7-22adbe5620bc`

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/coin/:id" element={<ChartPage />}/>
      </Routes>
    </>
  )
}

export default App
