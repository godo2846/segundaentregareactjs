//*import '../NavBar/NavBar.css'
import CartWidget from "../Cartwidget/CartWidget"

function NavBar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-brand">Rohe Tech</h1>
        <section className="navbar-links">
            <a href="/category/celulares">Celulares</a>
            <a href="/category/cables">Cables</a>
            <a href="/category/protectores">Protectores</a>
            <a href="/category/parlantes">Parlantes</a>
        </section>
        <CartWidget/>
        
    </nav>

  )
}

export default NavBar