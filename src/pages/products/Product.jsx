import React, {useState, useEffect} from 'react'

import Button from '../../components/button/Button'
import SuccessPage from '../successPage/SuccessPage'


import "./Product.css"
export default function Products() {
    const [product, setProduct] = useState()
    const [isGuide, setIsGuide] = useState(false)
    const [nextCounter, setNextCounter] = useState(0)
    const [isComplete, setIsComplete] = useState(false)


    useEffect(async ()=> {
        let productID = window.location.pathname
        productID = productID.split("/")
        productID = productID[productID.length - 1]

        const res = await fetch(`http://localhost:5000/api/products/${productID}`)
        const productData = await res.json()
        
        setProduct(productData[0])

        if(window.localStorage.length !== 0){   
                    setIsGuide(JSON.parse(window.localStorage.getItem("isGuide")))
                    setNextCounter(JSON.parse(window.localStorage.getItem("nextCounter")))
                } 
    },[])
    
    function getNextGuide() {
        if(product.guides.length - 1 !== nextCounter){
            setNextCounter(nextCounter + 1)
            window.localStorage.setItem("nextCounter", nextCounter + 1)
        } else {
            setIsComplete(true)
        }
    }
    
    function getBackGuide() {
        if(nextCounter !== 0){
            setNextCounter(nextCounter - 1)
            window.localStorage.setItem("nextCounter", nextCounter - 1)
        } else{
            setIsGuide(false)
            window.localStorage.setItem("isGuide", !isGuide)
        }
    }

    function guideAppearance() {
        if(isGuide){
            setIsGuide(false)
            window.localStorage.setItem("isGuide", false)
            window.localStorage.setItem("nextCounter", nextCounter)
        } else {
            setIsGuide(true)
            window.localStorage.setItem("isGuide", true)
            window.localStorage.setItem("nextCounter", nextCounter)
            
        }
    } 


    return (
        <div>
            {!isComplete ? (
                product ? (
                    isGuide ? (
                            <div className="guide-wrapper">
                                <div className="checklist">
                                    {product.guides.map((guide, key) => 
                                        <h3 className={key === nextCounter ? ("selected"): ("deselected")}
                                            id={key < nextCounter ? ("finished"):("")}>
                                            {guide.step}
                                        </h3>
                                    )}
                                    
                                </div>
                                <div className="guide-img-wrapper">
                                    <img src={product.guides[nextCounter].imgUrl} width="400px" height="266px"/>
                                </div>
                                <div className="method">
                                    <div className="ingredients">
                                        <h2>Ingredients</h2>
                                        {product.guides[nextCounter].ingredients.map((ingredient) =>
                                            <li className="ingredient">{ingredient}</li>
                                        )}
                                    </div>
                                    <div className="direction">
                                        <h2>Direction</h2>
                                        <p>
                                            {product.guides[nextCounter].direction}
                                        </p>
                                    </div>
                                    <div className="btn-wrapper">
                                            <div>
                                                <Button type="success" btnText="Back" onClick={() => getBackGuide()}/>
                                            </div>
                                            <div>
                                                <Button type="success" btnText="Next" onClick={() => getNextGuide()}/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                    ):(
                                <div className="container">
                                    <div className="product-wrapper">
        
                                    <div>
                                        <img src={product.imgUrl} alt="" width="800px"/> 
                
                                </div>
                                <div className="product-content">
                                    <h1>{product.title}</h1>
                                    <p className="price">{`${product.price} ${product.currency}`}</p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Illum, ipsum. Dignissimos, eaque minus! Velit minus blanditiis ab nisi nobis rem?    
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Illum, ipsum. Dignissimos, eaque minus! Velit minus blanditiis ab nisi nobis rem? 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Illum, ipsum. Dignissimos, eaque minus! Velit minus blanditiis ab nisi nobis rem? 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Illum, ipsum. Dignissimos, eaque minus! Velit minus blanditiis ab nisi nobis rem? 
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                        Illum, ipsum. Dignissimos, eaque minus! Velit minus blanditiis ab nisi nobis rem? 
                                    </p>
                                    <Button type="success" btnText="Anleitung" onClick={() => guideAppearance()}/>
                                </div>
                                </div>
                            </div>
                    )
    
                ) : ("")

            ):(
                <SuccessPage/>
            )}
        </div>
    )
}
