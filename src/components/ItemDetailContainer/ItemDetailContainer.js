import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../servicos/firebase"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAsync} from "../../Hook/Hook"
import swal from "sweetalert"; 

const ItemDetailContainer = () => {

    const [prod,setProd] = useState ()
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

   

    useAsync(
        setLoading, 
        () => getProductById(id), 
        setProd, 
        () => swal('Hubo un error al cargar el producto nuestros gatitos estan trabajando '), 
        [id]
    )

    if(loading) {
        return <h1 className="text_busqueda">🐈‍ Nuestros gatitos estan buscando los productos.....🐈‍ </h1>
    }

    return(
        <div >
            <ItemDetail {...prod} />
        </div>

    )

}

export default ItemDetailContainer