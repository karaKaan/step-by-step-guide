import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import "./Shop.css"
import Card from '../../components/card/Card'

export default function Shop() {
    const port = process.env.PORT || 5000

    const [products, setProducts] = useState()

    useEffect( async() =>  {
        const res = await fetch(`http://localhost:${port}/api/products`)
        const productData = await res.json()
        
        setProducts(productData)
        window.localStorage.clear()

    },[])
    
    return (
        <div className="shop-wrapper">
            {products ? (
                products.map(product => 
                    <Link to={`/product/${product.id}`}>
                        <Card imgUrl={product.imgUrl} title={product.title} price={`${product.price} ${product.currency}`} />
                    </Link>
                )  
            ):("")}
        </div>
    )
}
