
import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

const App = ()=>{
  const [newTimeBird, setNewTime] = useState("")
  const [newPlaceBird, setNewPlace] = useState('')
  const [newSpeciesBird, setNewSpecies]= useState('')
  const [newImageBird, setNewImage]= useState('')
  const [allBirds, setBirds] = useState([])

  useEffect(()=>{
    axios
      .get('hettp://localhost:3000/birds')
      .then((response)=>{
        setBirds(response.data)
      })
  },[])

  const newTime = (event)=>{
    setNewTime(event.target.value)
  }
  const newPlace= (event) =>{
    setNewPlace(event.target.value)
  }
  const newSpecies = (event)=>{
    setNewSpecies(event.target.value)
  }
  const newImage = (event) =>{
    setNewImage(event.target.value)
  }
  
  const submitForm = (event)=>{
    event.preventDefault()
    axios.post(
      'http://localhost:3000/birds',
      {
        time:newTimeBird,
        place:newPlaceBird,
        species:newSpeciesBird,
        image:newImageBird,
      }
    ).then(()=>{
      axios
        .get('http://localhost:3000/birds')
        .then((response)=>{
          setBirds(response.data)
        })
    })
    event.currentTarget.reset()
  }
  
  return(
    <>
    <h1>I think I saw a little bird</h1>
    <form onSubmit={(event)=> {submitForm(event)}}>
      Time:<input type="text" placeholder="Time" name="time" onChange={newTime}/>
      Place:<input type="text" placeholder="place" name="place" onChange={newPlace}/>
      Species:<input type="text" placeholder="species" name="species" onChange={newSpecies}/>
      Image:<input type="url" placeholder="image url" name="image" onChange={newImage}/>
      <input type="submit" value="ADD NEW BIRDY"/>
    </form>
    </>

  )
}

export default App;