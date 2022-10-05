import React from 'react'
import {Routes,  Route} from 'react-router-dom'
import Rooms from '../component/Rooms'
import Room from '../component/Room'



function RoomPage() {
  return (
    <Routes>
        <Route path='/' element={<Rooms/>}></Route>
        <Route path=':id' element={<Room/>}></Route>
    </Routes>
  )
}

export default RoomPage