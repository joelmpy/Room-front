import React from 'react'
import { useState} from 'react';
import { json, useNavigate } from 'react-router';


const AddRooms = () => {

    const [values, setValues] = useState("")
    const [num, setNumber] = useState("")
    const [user, setUsers] = useState([]);
    const navigate = useNavigate()

  const onFinish = async (event) => {
    event.preventDefault();
   fetch('http://localhost:8005/hotel', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            name: values,
            maxPersons: num,
          })
        })
        .then(reponse => reponse.json())
        .then(json => console.log('Success:',json))
        setUsers(json)
        navigate('/rooms', {replace : true})
  };


  const onChange = (event) => {
    setValues(event.target.value)
  }

  const onChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div>
        <form onSubmit={onFinish} method="post">
        <label for="name">Ajouter</label>
        <input type='text' id='name' placeholder="chambre" onChange={onChange}></input>
        <input type='number'onChange={onChangeNumber}></input>
        <button>Sauvgarder</button>
        </form>
      
    </div>
  )
   
}

export default AddRooms;

