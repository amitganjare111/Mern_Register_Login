import React from 'react';
import Navbar from './Component/Navbar';
import AddProduct from './Component/AddProduct';
import Home from './Component/Home';
import EditName from './Component/EditName';
import Main from './Component/Main';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route  path="/" element={<Home/>}></Route>
  <Route  path="/AddProduct" element={<AddProduct/>}></Route>
  <Route  path="/EditName/:id" element={<EditName/>}></Route> 
  <Route  path="/main" element={<Main/>}></Route>
</Routes>
</>
  );
}

export default App;
