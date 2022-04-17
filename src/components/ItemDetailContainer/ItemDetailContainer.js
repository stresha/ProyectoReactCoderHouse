import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../servicos/firebase"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
const [products, setProduct] = useState()
const { id } = useParams()

useEffect(() => {
    getProductById(id).then(prod => {
        setProduct(prod)
    })
}, [id])

return (
    <div>
        <ItemDetail {...products} />
    </div>
)



}

export  default ItemListContainer