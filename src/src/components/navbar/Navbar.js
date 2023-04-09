import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
     <meta name='viewport' content='width=device-width, initial-scale=1' />
  <section class="top-nav">
    <div>
      <Link to={"/"} className="lol">32-maktab</Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><Link to={"./maktabimizhaqida"}>Maktabimiz haqida</Link></li>
      <li><Link to={"./oqituvchilar"}>O'qituvchilar</Link></li>
      <li><Link to={"./boglanish"}>Bog'lanish</Link></li>
      <li><Link to={"./darsjadval"}>Dars jadvali</Link></li>
      <li><Link to={"./elektrondarslik"}>Video darslik</Link></li>
      <li><Link to={"./darsiwlanmalari"}>Dars ishlanmalari</Link></li>
      <li><Link to={"./galareya"}>Galareya</Link></li>
     
    </ul>
  </section>

    <h2>Assalomu aleykum 32-maktab web saytiga xush kelibsiz</h2>

    </div>
  )
}

export default Navbar