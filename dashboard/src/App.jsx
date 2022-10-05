import './App.css'
import { Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Products from "./Pages/Products"
import Users from "./Pages/Users" 
import Error from "./Pages/Error" 

function App() {

  return (
    <div>
      <h1> GO BIKE </h1>
      <Link to='/'>Home</Link>
      <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/Products/:id" element={<Products/>}></Route>
      <Route path = "/Users/:id" element={<Users/>}></Route>
      </Routes> 
    </div>
  )
}

export default App
