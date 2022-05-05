import { getDocs, collection, query, where, limit, doc, getDoc, writeBatch, documentId, addDoc, Timestamp } from "firebase/firestore";
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
        const collectionRef = collection(firestoreDb, 'category')

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
    export const crearOrder = (cart, objOrder) => {
        return new Promise((resolve,reject) => {
      
          const objOrdenWithTimestamp = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
          }
      
          const batch = writeBatch(firestoreDb);
          const outOfStock = [];
          const ids = cart.map((prod) => prod.id);
          const collectionRef = collection(firestoreDb, "products");
      
          getDocs(query(collectionRef, where(documentId(), "in", ids)))
                .then((response) => {
                  response.docs.forEach((doc) => {
                    const dataDoc = doc.data();
                    const prodQuantity = objOrdenWithTimestamp.items.find(
                      (prod) => prod.id === doc.id
                    ).quantity;
                    if (dataDoc.stock >= prodQuantity) {
                      batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
                    } else {
                      outOfStock.push({ id: doc.id, dataDoc });
                    }
                  });
                })
                .then(() => {
                  if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, "orders");
                    return addDoc(collectionRef, objOrdenWithTimestamp);
                  } else {
                    return Promise.reject({
                      name: "outOfStockError",
                      products: outOfStock,
                    });
                  }
                })
                .then(({ id }) => {
                  batch.commit();
                  resolve(id)
                }).catch(error => {
                  reject(error)
                })
        })
      }
