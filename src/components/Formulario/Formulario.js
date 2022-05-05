import './Formulario.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import CartContext from '../../Context/Context'
import { useContext } from "react"
import swal from 'sweetalert';
import { crearOrder } from "../../servicos/firebase";


const Formulario = () => {
const { cart , precioFinal, borrarCarrito } = useContext(CartContext)

const [ Purchase, setPurchase ] = useState(false);



const [Datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });


 const formEvent = (event) => {
   setDatos({
     ...Datos, 
     [event.target.name]: event.target.value
   })
 }

 const submit = (event) => {
  event.preventDefault();
  
 }

const order = (e) => {
  const objOrden = {
    buyer: {
      nombre: Datos.nombre,
      telefono: Datos.telefono,
      email: Datos.email,
    },
    items: cart,
    total: precioFinal()
  };

  crearOrder(cart, objOrden).then(id => {
    borrarCarrito()
    setPurchase(true);
    swal(` COMPRASTE ! \n Nuestros gatitos estan preparando el pedido !  \n 🐈  orden :  ${id}  🐈 \n No pierdas este numero ! `)
    }).catch((error) => {
    if (
      error &&
      error.name === "outOfStockError" &&
      error.products.length > 0
    ) {
      console.log(error.products);
    } else {
      console.log(error);
    }
    }).finally(() => {
      Purchase(false)
    })


  }



    return (
      Purchase ? <div><h1 className='form_text'>GRACIAS POR TU COMPRA!</h1><Link to='/' className='tienda'> IR A LA TIENDA </Link> </div> :
      <div className='form_div'>
        <h1 className='form_text'>Complete los datos para finalizar la compra!</h1>
        <p className='form_text'>PRODUCTOS SELECCIONADOS</p>
        <p className='form_text'> Total Compra: $ {precioFinal()}</p>
        <ul className='form_map'>
                {cart.map(prod => <li className='form_list' key={prod.id}> <img className='form_img' src={prod.img} alt="producto"/> 
                    <p>{prod.name}</p> 
                    <p> {prod.quantity} X {prod.price}</p> 
                    </li>)}
            </ul>
            
      <form className='form' onSubmit={submit}>  
        <input  className='form_campo' placeholder="Ingrese nombre" type="text" name="nombre"  onChange={formEvent} maxLength="10"  value={Datos.nombre}   required></input>
        
        <input className='form_campo' placeholder="Ingrese telefono" type="number" name="telefono" onChange={formEvent}  maxLength="10" value={Datos.telefono} required></input>
        
        <input className='form_campo' placeholder="Ingrese mail" type="email" name="email" onChange={formEvent} maxLength="40" value={Datos.email} required></input>
        
        <button  type="submit" className='form_button'  onClick={order}>Enviar</button>
        
      </form>

     
    
    </div>
    )
  }

export default Formulario