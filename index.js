import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About';
import Contact from './Contact';




export default function Index(){
return<>
<BrowserRouter>


<Routes>

    <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
</Routes>

<nav 
style={{
    backgroundColor:"blue",
    padding:"10px",
    display:"flex",
    justifyContent:"Center",
}}>

<ul ul style={{
    listStyle:"none",
    display:"flex",
    gap:"20px",
    padding:"0",
    margin:"0",
}}>

<li>
    <NavLink to="/" style={linkstyle}>
    Home
    </NavLink>
</li>

<li>
    <Link to="/about" style={linkstyle}>
    About us
    </Link>
</li>

<li>
    <Link to="/contact" style={linkstyle}>
    Conatct us
    </Link>
</li>

</ul>
</nav>


</BrowserRouter>
</>
}

const linkstyle={
    textDecoration:"none",
    color:"White",
    fontSize:"18px",
    fontweight:"bold"
};