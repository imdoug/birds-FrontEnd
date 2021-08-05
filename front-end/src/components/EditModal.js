import React from 'react'
import axios from 'axios'

const EditModal = (props) => {
    return(
        <div className="modal hidden">
        <h2>Edit form</h2>
            <form onSubmit={(event)=>{props.editSubmit(event,props.editId)}}>
                Time:<input type="text" placeholder="Time" onChange={props.newTime}/>
                Place:<input type="text" placeholder="place"  onChange={props.newPlace}/>
                Species:<input type="text" placeholder="species"  onChange={props.newSpecies}/>
                Image:<input type="url" placeholder="image url"  onChange={props.newImage}/>
                <input type="submit" value="Edit this birdy"/>
            </form>
        </div>
    )
}

export default EditModal
