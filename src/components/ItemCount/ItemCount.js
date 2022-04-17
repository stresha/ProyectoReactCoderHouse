import { useState } from 'react'
import swal from 'sweetalert'
import './ItemCount.css'


const ItemCount = ({ initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

   

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
        else {
            swal("Sin Stock Disponible")
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return(
        <div className='card_boton' >
           <div className='button_contenido'>
            <button className='button_item' onClick={decrement}>-</button>
            <p className='button_text'>{count}</p>
            <button className='button_item' onClick={increment}>+</button>
            <button  className='button_item_compra' onClick={() => onAdd(count)}><img src="https://i.postimg.cc/kGqHWcR4/cart.png" alt="carro pixel"/></button>
            </div>
        </div>
    )
}



export default ItemCount

