import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        GetProducts()
    }, [])

    const GetProducts = () => {
        
        const URL = '../data/products.json';
        
        setTimeout(() => {
            
            fetch(URL)
                .then(resp => resp.json())
                .then((data) => {
                    setProducts(data);
                })
                
            }, 2000);

    }
    
    return(
        <div>
            <h1 className='text-5xl m-10 text-black underline'>DREAM BURGER</h1>
            <h2 className="text-3xl m-10 text-black underline">{greeting}</h2>

            <ItemList items={products}/>


        </div>
    )
    
}

export default ItemListContainer; 

