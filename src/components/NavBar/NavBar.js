import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../Context/Context'
import { useContext } from 'react'
import { getCategories } from '../../servicos/firebase' 
import { useState , useEffect } from 'react'
import { orderCategories } from './orden'



const NavBar = () => {
    
  //traemos el contador para que si no hay nada no este 
 const {getQuantity } = useContext(CartContext)

 const [categories, setCategories] = useState([])



 useEffect(() => {
  getCategories().then(categories => {
    orderCategories(categories)
      setCategories(categories)
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
            <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>HOME</NavLink>
            <NavLink to='/category/lamparas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>LAMPARAS</NavLink>
            <NavLink to='/category/veladores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>VELADORES</NavLink>
            <NavLink to='/category/guirnaldas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>GUIRNALDAS</NavLink>
            <NavLink to='/category/cortinas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>CORTINAS</NavLink>
          </div>
        </nav>
    )
}

export default NavBar