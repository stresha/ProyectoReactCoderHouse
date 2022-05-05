import { React } from "react";
import { useState, useContext } from 'react' 
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/Context'
import { useNotification } from "../../components/Alert/Alert";


//
const ItemDetail  = ({ name, id, price, description, stock, img }) => {
  const { setNotification } = useNotification()
  const { agregarProducto } = useContext(CartContext)
  const compraOnAdd = (count) => {
        agregarProducto({ id, name, price, img}, count)
        setquantity(count)
        setNotification("success",`Agregado al carrito ${name}! \n cantidad de productos: ${count} ! \n excelente eleccion!`)
    }
   
    const  [quantity , setquantity] = useState (0)
     
  
  return (
    <div className='caja_contenido' >
    <div className='caja_detalle'  key={id}  >
    <img className='card_products' src={img} alt="producto"/>
    <h5>{name}</h5>
    <p >${price}</p>
    <p>{description}</p>
    <p className='stock'>Stock disponible: {stock}</p>
    {quantity === 0 ? <ItemCount stock={stock} onAdd={compraOnAdd}/>  : <Link to='/cart' className='Option'>Finalizar Compra</Link> }
    
    </div>
    </div>
)      

};


export default ItemDetail