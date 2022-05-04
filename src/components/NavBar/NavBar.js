import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../Context/Context'
import { useContext } from 'react'
import { getCategories } from '../../servicos/firebase' 
import { useState , useEffect } from 'react'
import { categoryOrder } from './Help'

const NavBar = () => {
    
 
 const {getQuantity } = useContext(CartContext)

 const [categories, setCategories] = useState([])



 useEffect(() => {
  getCategories().then(categories => {
    categoryOrder(categories)
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