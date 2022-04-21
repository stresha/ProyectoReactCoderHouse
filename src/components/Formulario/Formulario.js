import './Formulario.css'
import { useForm } from 'react-hook-form'
import { useState } from "react";
import CartContext from '../../Context/Context'
import { useContext } from "react"
import { firestoreDb } from '../../servicos/main'
import {addDoc, collection} from 'firebase/firestore'

 


 const Formulario = () => {

  const { cart , precioFinal} = useContext(CartContext)

    const { register, handleSubmit , errors} = useForm();

    const {Entradas, setEntradas}   = useState([])
    
    
    const onSubmit = (data, e) => {
      console.log(data)
      setEntradas([
        ...Entradas,
        data
      ])
      e.target.reset()
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
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input  className='form_campo' placeholder="Ingrese nombre"{...register("nombre", { required: true, maxLength: 20,  message: 'campo es requerido' })}></input>
        <span >
          {errors?.nombre?.message}
        </span>
        <input className='form_campo' placeholder="Ingrese telefono" type="number"{...register("telefono", { required: true, maxLength: 20 , message: 'campo es requerido' })}></input>
        <span >
          {errors?.telefono?.message}
        </span>
        <input className='form_campo' placeholder="Ingrese mail" type="email"{...register("mail", { required: true, maxLength: 20 ,  message: 'campo es requerido'})}></input>
        <span >
          {errors?.mail?.message}
        </span>
        <button  type="submit" className='form_button'>Enviar</button>
      </form>

     
    
    </div>
    )
  };

export default Formulario