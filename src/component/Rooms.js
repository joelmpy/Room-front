import React from 'react'
import { useState, useEffect } from 'react'
import RoomCard from './RoomCard';
import {Link} from 'react-router-dom'

function Rooms() {

  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetechData = async () => {
      const data = await window.fetch('http://localhost:8005/hotel')
      const json = await data.json()
      setRoom(json)
    }
    fetechData()
  }, [])

  return (
    <div>
      {room.map(rooms => (
        <Link key={rooms.id} to={rooms._id}>
          <RoomCard room={rooms}></RoomCard>
        </Link>)
      )}

    </div>
  )
}

export default Rooms