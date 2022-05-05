import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../servicos/firebase"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useAsync} from "../../Hook/Hook"
import { useNotification } from "../../components/Alert/Alert";
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [prod,setProd] = useState ()
    const [loading, setLoading] = useState(true)
    const { setNotification } = useNotification()
    const { id } = useParams()

   

    useAsync(
        setLoading, 
        () => getProductById(id), 
        setProd, 
        () => setNotification('error','Hubo un error al cargar el producto nuestros gatitos estan trabajando '), 
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