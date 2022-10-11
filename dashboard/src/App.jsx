import './App.css'
import { Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Products from "./Pages/Products"
import Users from "./Pages/Users" 
import Error from "./Pages/Error"

function App() {

  return (
    <div className="mainPage">
      <h1 style={{ margin:'0 0 10px 0', padding:'10px', textAlign:'center', borderRadius: '10px', fontFamily: 'kalam', color: '#C0C0C0'}}>Go Bike</h1> 
      <section className="navSection">
        <nav className="navBar">
          <Link to="/">Home</Link>
          {/* <Link to="/users">Usuarios</Link>
          <Link to="/products">Productos</Link> */}
        </nav>
      </section>
      <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/Products/:id" element={<Products/>}></Route>
      <Route path = "/Users/:id" element={<Users/>}></Route>
      <Route path = "*" element={<Error/>}></Route>
      </Routes> 
    </div>
  )
}

export default App
