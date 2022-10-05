import React from 'react'
import Layout from './component/Layout';
import {Routes, Route} from 'react-router-dom'
import HomePage from './view/HomePage'
import RoomPage from './view/RoomPage'
import AddRooms from './component/AddRooms';

const App = () =>  {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="rooms/*" element={<RoomPage/>}></Route>
        <Route path="/add" element={<AddRooms/>}></Route>
        <Route path="about" element={<h1>a props</h1>}></Route>
        <Route path="Contact" element={<h1>Contact</h1>}></Route>
        <Route path="*" element={<h1>Not found 404</h1>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
