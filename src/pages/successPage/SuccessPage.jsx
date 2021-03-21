import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'


import "./SuccessPage.css"

export default function SuccessPage() {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => 
            history.push("/shop"), 1000
        )
    },[])
    return (
        <div className="success-state">
                    <p className="emoji-success">🤤</p>
                    <h1>COMPLETED - Enjoy your <span>Goodie</span></h1>
        </div>
    )
}
