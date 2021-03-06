import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import BirdCard from "./components/BirdCard"
import EditModal from "./components/EditModal"
import BirdAnimation from "./components/birdAnimation"


const App = ()=>{
  const [newTimeBird, setNewTime] = useState("")
  const [newPlaceBird, setNewPlace] = useState('')
  const [newSpeciesBird, setNewSpecies]= useState('')
  const [newImageBird, setNewImage]= useState('')
  const [allBirds, setBirds] = useState([])
  const [editBird, setEditBird] = useState({})

  useEffect(()=>{
    axios
      .get('http://localhost:3000/birds')
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
  const clearStates = () => {
      setNewTime('')
      setNewImage('')
      setNewPlace('')
      setNewSpecies('')
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
    toggleCreateModal()
  }

  const openEditModal = (bird) => {
    document.querySelector('.modalBackground').classList.toggle('hidden')
    setEditBird(bird)
    clearStates()
  }

  const editSubmit = (event, bird) =>{
    event.preventDefault()
    axios.put(
      `http://localhost:3000/birds/${bird._id}`,
      {
        time:newTimeBird || bird.time,
        place:newPlaceBird || bird.place,
        species:newSpeciesBird || bird.species,
        image:newImageBird || bird.image,
      }
    ).then(()=>{
      axios
        .get('http://localhost:3000/birds')
        .then((response)=>{
          setBirds(response.data)
        })
    })
    event.currentTarget.reset()
    setEditBird({})
    document.querySelector(".modalBackground").classList.toggle('hidden')
  }

  const deleteBird = (birdData) =>{
    axios
      .delete(`http://localhost:3000/birds/${birdData._id}`)
      .then(()=>{
        axios
          .get('http://localhost:3000/birds')
          .then((response)=>{
            setBirds(response.data)
          })
      })
  }

  const toggleCreateModal = () => {
      document.querySelector('#createModal').classList.toggle('hidden')
      document.querySelector('#createModalOpener').classList.toggle('hidden')
      clearStates()
  }

  return(
    <>
    <img className="logo" src="https://i.ibb.co/r0dQrCd/The-God-Feather-1.png"/>
    <BirdAnimation /> 
    <img className="feather-left" src="https://www.pngarts.com/files/3/Bird-Feather-Transparent-Image.png"/>
    <button id="createModalOpener" onClick={toggleCreateModal}>ADD A BIRDY</button>
    <form id="createModal" className="hidden" onSubmit={(event)=> {submitForm(event)}}>
      Date:<input type="text" placeholder="Time"  onChange={newTime}/>
      Place:<input type="text" placeholder="place"  onChange={newPlace}/>
      Species:<input type="text" placeholder="species"  onChange={newSpecies}/>
      Image:<input type="url" placeholder="image url"  onChange={newImage}/>
      <input type="submit" value="ADD BIRDY"/>
    </form><br/>
    <div className="container-master">
        <div className="birdBox">
            {allBirds.map((bird,index) => {
                return <BirdCard key={index}
                    bird={bird}
                    deleteBird={deleteBird}
                    openEditModal={openEditModal}
                    />
            })}
        </div>
    </div>
    <footer>&copy; 2021 Doug Moreira & Nolo Marsh All rights reserved.</footer>
    <EditModal
        newTime={newTime}
        newPlace={newPlace}
        newSpecies={newSpecies}
        newImage={newImage}
        editSubmit={editSubmit}
        editBird={editBird}
        setEditBird={setEditBird}/>
    </>
  )
}

export default App;
