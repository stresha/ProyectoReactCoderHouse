import './Formulario.css'

import { useState } from "react";
import CartContext from '../../Context/Context'
import { useContext } from "react"
import { firestoreDb } from '../../servicos/main'
import {addDoc, collection, doc} from 'firebase/firestore'
import swal from 'sweetalert';

const Formulario = () => {
const { cart , precioFinal} = useContext(CartContext)

  const [Datos, setDatos] = useState({
    nombre: "",
    // telefono: "",
    // email: "",
  });


 const cambio = (event) => {
   setDatos({
     ...Datos, 
     [event.target.name]: event.target.value
   })
 }



 const enviar = (event) => {
  event.preventDefault();
  console.log(Datos.nombre + "" + Datos.telefono + "" + Datos.email)
 }




const crearOrden = () => {
  const objOrden = {
    buyer: {
      nombre: Datos.nombre,
      telefono: Datos.telefono,
      email: Datos.email,
    },
    items: cart,
    total: precioFinal()
  };


  const collectionRef = collection(firestoreDb, 'orders')
  addDoc(collectionRef, objOrden ).then(response => {
    console.log(response)
  
  })

}
  


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
      <form className='form' onSubmit={enviar}>
        <input  className='form_campo' placeholder="Ingrese nombre" type="text" name="nombre" onChange={cambio} maxLength="10" value={Datos.nombre}  required></input>
        
        <input className='form_campo' placeholder="Ingrese telefono" type="number" name="telefono" onChange={cambio}  maxLength="10" value={Datos.telefono} required></input>
        
        <input className='form_campo' placeholder="Ingrese mail" type="email" name="email" onChange={cambio} maxLength="20" value={Datos.email} required></input>
        
        <button  type="submit" className='form_button'  onClick={crearOrden}>Enviar</button>
      </form>

     
    
    </div>
    )
  }

export default Formulario