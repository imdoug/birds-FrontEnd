import React from 'react'
import axios from 'axios'

const BirdCard = (props) => {
    return (
        <div className="birdCard">
            <img className="cardImg" src={props.bird.image} />
            <h3>{props.bird.species}</h3>
            <h5>Time: {props.bird.time}</h5>
            <h5>Location: {props.bird.place}</h5>

        </div>
    )
}

export default BirdCard
