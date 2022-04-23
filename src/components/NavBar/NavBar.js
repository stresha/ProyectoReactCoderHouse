import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../Context/Context'
import { useContext } from 'react'
import { getCategories } from '../../servicos/firebase' 
import { useState , useEffect } from 'react'


const NavBar = () => {
    
  //traemos el contador para que si no hay nada no este 
 const {getQuantity } = useContext(CartContext)

 const [categories, setCategories] = useState([])

 

 const ordenCats = (categories) => {
  categories.sort(function (a,b) {
      if (a.orden > b.orden) {
          return 1;
      } 
      if (a.orden < b.orden) {
          return -1;
      }
      return 0
  })
}



 useEffect(() => {
  getCategories().then(categories => {
    ordenCats(categories)
      setCategories(categories)
  }).catch(error => {
      console.log(error)
  })
}, [])


    return (
        <nav>
          
          <div className="filtros">
            <Link to='/' className='link_tienda'>
              <h1 className='form_text' >Tienda</h1>
            </Link>
            {getQuantity() > 0  && <CartWidget/> }  
            
            <div className="filtros">
            {
                  categories.map(cat => 
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