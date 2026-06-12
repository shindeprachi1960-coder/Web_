import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SubviewPoints from "./Pages/SubviewPoints"
import Booking from "./Pages/Booking"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/subviewpoints" element={<SubviewPoints />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  )
}

export default App;