import {getDocs,  collection, query, where , limit, getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from './main'
import {createAdaptedCategory} from '../adap/category'


export const getProducts  = (categoryId) => {
    return new Promise ((resolve,reject) => {
        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), limit(10))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(querySnapshot =>{
            const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
             resolve(products)
    }).catch(error => {
        reject(error)
    })
})
}

export const getProductById = (productId) => {
    return new Promise ((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products', productId)
        getDoc(docRef).then(querySnapshot => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            resolve(product)
        }).catch(error => {
            reject(error)
        })

    }, [productId])

}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(firestoreDb, 'categories')

      getDocs(collectionRef).then(querySnapshot => {
        const categories = querySnapshot.docs.map(doc => {
            return createAdaptedCategory(doc)
        })
        resolve(categories)
        }).catch(error => {
            reject(error)
        })
    })
}