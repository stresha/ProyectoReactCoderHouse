import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../Context/Context'


const CartWidget = () => {
    
    const { getQuantity } = useContext(CartContext)
    
    return (
        <div >
        <Link to={'/cart'} >
        <img src="https://i.postimg.cc/kGqHWcR4/cart.png" alt='cart' className="cartContent"/>
        { getQuantity() }
    </Link>
    </div> 
    )
}

export default CartWidget