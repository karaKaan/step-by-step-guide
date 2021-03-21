import React from 'react'

import "./Card.css"


export default function Card(props) {
    return (
        <div className="card-container">
            <div className="img-wrapper">
                <img src={props.imgUrl} width="300px" height="150px"/>
            </div>
            <div className="card-content">
                <h3>{props.title}</h3>
                <hr/>
                <p>{props.price}</p>
            </div>

        </div>
    )
}
