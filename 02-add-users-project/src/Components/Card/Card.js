import React from 'react'
import './Card.css';

function Card({users, children}) {
    return (
        <div className={`card`} >{children}</div> // children will put everything between the card component its wrapped around
    )
}

export default Card
