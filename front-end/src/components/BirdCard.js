import React from 'react'

const BirdCard = (props) => {
    return (
        <div className="birdCard">
            <img className="cardImg" src={props.bird.image} alt={props.bird.species}/>
            <div className="cardInfo">
                <h3>{props.bird.species}</h3>
                <h5>Time: {props.bird.time}</h5>
                <h5>Location: {props.bird.place}</h5>
            </div>
            <div className="btnBox">
                <button onClick={()=>{props.deleteBird(props.bird)}}>DELETE</button>
                <button onClick={()=>{props.openEditModal(props.bird)}}>EDIT</button>
            </div>
        </div>
    )
}

export default BirdCard
