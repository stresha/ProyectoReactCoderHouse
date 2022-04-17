import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const agregarProducto = (product, quantity) => {
        
  //creo estado con valor 
       let cantidad = true ;
       
       //mapeo el array y vemos si el id = id para no duplicar , suma cantidad de products
        cart.filter((prod) => {
            if(prod.id===product.id) {
            prod.quantity =    quantity + prod.quantity;
                cantidad =  false;
                setCart([...cart])
            }
  
        })
        // pero si es como cantidad retorno obj
        if (cantidad  ===true) {
            const objItemCart = {
                ...product,
                quantity
            }
            setCart([...cart, objItemCart ])
        }


            
    }

    //borra 1 producto 

    const borrarProducto = (id ) => {
       console.log("borrarProducto")
       console.log(id)
        cart.filter((prod) => {
            if(prod.id===id) {
                if (prod.quantity > 1) {
                    prod.quantity--
                    setCart([...cart])
                }
                else {
                    let carritoNuevo = cart.filter((item) => item.id !== id); // con esto si lego a 0 desaparece
                    setCart([...carritoNuevo]) 
                }

            }
  
        })
        console.log(cart)
    }

    //borra todos esos productos del grupo (igual a item anterior)
    const borrarTodos  = (id) => {
        let carritoActualizado = cart.filter((item) => item.id !== id); // con esto si lego a 0 desaparece
        setCart([...carritoActualizado]) 
    }

    //suma productos 
    const precioFinal = () => {
        let total = 0 
        for (const iterator of cart) {
            total += iterator.quantity * iterator.price;
        } 
        console.log(total)
        return total
    
    }

    // vuelve carrito un array vacio
    const borrarCarrito = () => {
        setCart([])
        console.log("aca borrar carrito")
    }
    
    const finalizarCompra = () => {
        setCart([])
        swal(" 🐈 Gracias por tu compra  🐈 !!")
       
       

    }

    //sumamos cantidad al lado del carrito
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    //funcion para ver si es v 
    const estaEnCarrito = (id) => {
        return cart.some(item => item.id === id)
    }

    


    return (
        <Context.Provider value={{ 
            cart, 
            agregarProducto,
            borrarCarrito,
            getQuantity,
            borrarProducto,
            precioFinal,
            borrarTodos,
            finalizarCompra,
            estaEnCarrito

           
            
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
