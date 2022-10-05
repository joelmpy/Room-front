import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'

import RoomCard from './RoomCard';
import RoomForm from './RoomForm';

const Room = () => {
   

    const [room, setRoom] = useState(null);
     // pour recuperes une chambre avec son id //
    const {id} = useParams()

    // udapte de la page //
    useEffect(() => {
      const fetechData = async () => {
        const data = await window.fetch(`http://localhost:8005/hotel/${id}`)
        const json = await data.json()
        setRoom(json)
      }
      fetechData()
    }, [id])
  
    // utilser notre composant pour utilser notre page //
    return room ? (
      <div>
        <RoomCard room={room} />
        <h2>Editer</h2>
        <RoomForm id={id} room={room} setRoom={setRoom}/>
      </div>
    ) : null
}

export default Room