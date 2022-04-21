import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../Context/Context'
import { useContext } from 'react'
import { getCategories } from '../../servicos/firebase' 
import { useState , useEffect } from 'react'
import { order } from './orden'



const NavBar = () => {
    
  //traemos el contador para que si no hay nada no este 
 const {getQuantity } = useContext(CartContext)

 const [categoria, setcategoria] = useState([])
 useEffect(() => {
  getCategories().then(categoria => {
      order(categoria)
      setcategoria(categoria)
  }).catch(error => {
      console.log(error)
  })
}, [])
    return (
        <nav>
          <div className="filtros">
            <Link to='/' className='link_tienda'>
              <h1>Tienda</h1>
            </Link>
            {getQuantity() > 0  && <CartWidget/> }  
            <div className="filtros">
              {
                  categoria.map(cat => 
                      <NavLink 
                          key={cat.id} 
                          to={`/category/${cat.id}`} 
                          className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
                      >
                          {cat.description}
                      </NavLink>)
              }
          </div>
        </div>
        
            
        </nav>
    )
}

export default NavBar