import './Formulario.css'

import { useState } from "react";
import CartContext from '../../Context/Context'
import { useContext } from "react"
import { firestoreDb } from '../../servicos/main'
import {addDoc, collection} from 'firebase/firestore'

const Formulario = () => {


//   const collectionRef = collection(firestoreDb, "products");
  const { cart , precioFinal} = useContext(CartContext)

//   const [Datos, setDatos] = useState({
//     nombre: "",
//     telefono: "",
//     email: "",
//   });
//   function handleSubmit(evt) {
//     evt.preventDefault();
// }

// function handleChange(e) {
//   const { target } = e;
//   const { nombre, valor } = target;
//   const newDatos = {
//     ...Datos,
//     [nombre]: valor,
//   };
//   setDatos(newDatos);
// }

// const crearOrden = () => {
//   const objOrden = {
//     buyer: {
//       nombre: Datos.nombre,
//       telefono: Datos.telefono,
//       email: Datos.email,
//     },
//     items: cart,
//     total: precioFinal,
//   };
// }
  


    return (

      <div className='form_div'>
        <h1 className='form_text'>Complete los datos para finalizar la compra!</h1>
        <p className='form_text'>PRODUCTOS SELECCIONADOS</p>
        <p className='form_text'> Total Compra: $ {precioFinal()}</p>
        <ul className='form_map'>
                {cart.map(prod => <li className='form_list' key={prod.id}> <img className='form_img' src={prod.img}/> 
                    <p>{prod.name}</p> 
                    <p> {prod.quantity} X {prod.price}</p> 
                    </li>)}
            </ul>
      <form className='form' >
        <input  className='form_campo' placeholder="Ingrese nombre"></input>
        
        <input className='form_campo' placeholder="Ingrese telefono" type="number"></input>
        
        <input className='form_campo' placeholder="Ingrese mail" type="email"></input>
        
        <button  type="submit" className='form_button'>Enviar</button>
      </form>

     
    
    </div>
    )
  }

export default Formulario