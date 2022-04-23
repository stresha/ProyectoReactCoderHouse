import './Formulario.css'

import { useState } from "react";
import CartContext from '../../Context/Context'
import { useContext } from "react"
import { firestoreDb } from '../../servicos/main'
import {addDoc, collection, getDoc, query, where, getDocs, documentId, doc, writeBatch} from 'firebase/firestore';
import swal from 'sweetalert';


const Formulario = () => {
const { cart , precioFinal, borrarCarrito } = useContext(CartContext)
const batch = writeBatch(firestoreDb);
const outStock = [];
const ids = cart.map((prod) => prod.id);
const collectionRef = collection(firestoreDb, "products");

const [Datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

//mete datos de form en orden
 const cambio = (event) => {
   setDatos({
     ...Datos, 
     [event.target.name]: event.target.value
   })
 }


// rnn + borrar cart
 const enviar = (event) => {
  event.preventDefault();
  borrarCarrito()
 }



//crea orden toma imput de form + cart + saldo
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


  //magia de firebase (cargar order + actulizar stock)
  getDocs(query(collectionRef, where(documentId(), "in", ids)))
    .then((response) => {
      response.docs.forEach((doc) => {
        const dataDoc = doc.data();
        const updateOrder = objOrden.items.find(
          (prod) => prod.id === doc.id
        ).quantity;
        if (dataDoc.stock >= updateOrder) {
          batch.update(doc.ref, { stock: dataDoc.stock - updateOrder });
        } else {
          outStock.push({ id: doc.id, dataDoc });
        }
      });
    })
    .then(() => {
      if (outStock.length === 0) {
        const collectionRef = collection(firestoreDb, "orders");
        return addDoc(collectionRef, objOrden); //Promesa
      } else {
        return Promise.reject({name: "outStock",products: outStock});
      }
    })
    .then(({ id }) => {
      batch.commit()
      swal(` COMPRASTE ! \n Nuestros gatitos estan preparando el pedido !  \n 🐈  orden :  ${id}  🐈 \n No pierdas este numero ! `)
    })
    .catch((error) => {
      if (error && error.name === "outStock" && error.products.length > 0) {
        console.log(error.products);
      } else {
        console.log(error);
      }
    });

}
 

//required ---> validar form 
    return (

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
            
      <form className='form' onSubmit={enviar}>  
        <input  className='form_campo' placeholder="Ingrese nombre" type="text" name="nombre"  onChange={cambio} maxLength="10"  value={Datos.nombre}   required></input>
        
        <input className='form_campo' placeholder="Ingrese telefono" type="number" name="telefono" onChange={cambio}  maxLength="10" value={Datos.telefono} required></input>
        
        <input className='form_campo' placeholder="Ingrese mail" type="email" name="email" onChange={cambio} maxLength="20" value={Datos.email} required></input>
        
        <button  type="submit" className='form_button'  onClick={crearOrden}>Enviar</button>
        
      </form>

     
    
    </div>
    )
  }

export default Formulario