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

 const [Categories, setCategories] = useState([])


 const ordenCats = (Categories) => {
  Categories.sort(function (a,b) {
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
  getCategories().then(Categories => {
    ordenCats(Categories)
      setCategories(Categories)
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