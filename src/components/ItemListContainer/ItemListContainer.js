import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from 'react'
import { getProducts } from '../../servicos/firebase'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true) 

    const { categoryId } = useParams()


   
    useEffect(() => {
        setLoading(true)
        getProducts(categoryId).then(items => {
            setProducts(items)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    return (
        <div >
            {
                loading ? 
                <h1 className="text_busqueda">🐈‍ Nuestros gatitos estan buscando los productos.....🐈‍ </h1> :  
                products.length > 0 ? 
                    <ItemList products={products}/> : 
                    <h1 className="text_busqueda">No se encontraron productos!</h1>
            }
        </div>
    )    
        }   


export default ItemListContainer
