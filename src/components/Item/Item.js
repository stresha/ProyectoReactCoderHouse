import { React } from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  

  return (
        <div  key={producto.id}  >
                <img className='card_products' src={producto.img} alt="producto"/>
                <h5>{producto.name}</h5>
                <p >${producto.price}</p>
                <Link to={`/item/${producto.id}`} className='Option'>Ver detalle del producto</Link>
                <p className='stock'>Stock disponible: {producto.stock}</p>
                </div>
          )      
            
};

export default Item