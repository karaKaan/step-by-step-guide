import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'


export default function Navbar() {
    return (
        <nav>
            <ul>
                    <Link className="nav-logo" to="/">
                        <h2>Goodies 🍪</h2>
                    </Link>
                    <Link className="nav-link" to="/shop">
                        <li>Shop</li>
                    </Link>
            </ul>
        </nav>
    )
}
