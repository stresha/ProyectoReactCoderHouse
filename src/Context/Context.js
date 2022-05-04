import { createContext, useState } from "react";


const Context = createContext()



export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    
    const agregarProducto = (product, quantity) => {
        
  
       let cantidad = true ;
       
       
        cart.filter((prod) => {
            if(prod.id===product.id) {
            prod.quantity =    quantity + prod.quantity;
                cantidad =  false;
                setCart([...cart])
            }
  
        })
        
        if (cantidad  ===true) {
            const objItemCart = {
                ...product,
                quantity
            }
            setCart([...cart, objItemCart ])
        }


            
    }

   

    const borrarProducto = (id ) => {
        cart.filter((prod) => {
            if(prod.id===id) {
                if (prod.quantity > 1) {
                    prod.quantity--
                    setCart([...cart])
                }
                else {
                    let carritoNuevo = cart.filter((item) => item.id !== id); 
                    setCart([...carritoNuevo]) 
                }

            }
  
        })
        precioFinal()
    
    }


    
    
    const borrarTodos  = (id) => {
        let carritoActualizado = cart.filter((item) => item.id !== id); 
        setCart([...carritoActualizado]) 
    }

    
    const precioFinal = () => {
        let total = 0 
        for (const iterator of cart) {
            total += iterator.quantity * iterator.price;
        } 
        return total
        
    
    }


   
    const borrarCarrito = () => {
        setCart([])
    }
    
    
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }


    return (
        <Context.Provider value={{ 
            cart, 
            agregarProducto,
            borrarCarrito,
            getQuantity,
            borrarProducto,
            precioFinal,
            borrarTodos

           
            
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
