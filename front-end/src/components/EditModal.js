import React from 'react'

const EditModal = (props) => {

    const closeEditModal = () => {
        document.querySelector('.modalBackground').classList.toggle('hidden')
        props.setEditBird({})
    }

    return(
        <div className="modalBackground hidden">
            <div className="modal">
                <p id="modalClose" onClick={closeEditModal}>x</p>
                <h2>Edit {props.editBird.species}</h2>
                <form onSubmit={(event)=>{props.editSubmit(event,props.editBird)}}>
                    Date:<input type="text" placeholder={props.editBird.time} onChange={props.newTime}/>
                    Place:<input type="text" placeholder={props.editBird.place}  onChange={props.newPlace}/>
                    Species:<input type="text" placeholder={props.editBird.species}  onChange={props.newSpecies}/>
                    Image:<input type="url" placeholder={props.editBird.image}  onChange={props.newImage}/>
                    <input type="submit" value="EDIT BIRDY"/>
                </form>
            </div>
        </div>
    )
}

export default EditModal
