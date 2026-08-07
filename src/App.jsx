import Hero from "./components/Hero.jsx"
import { Routes, Route, BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App