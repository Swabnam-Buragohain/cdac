import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dac from './component/Dac';
import Dbda from './component/Dbda';
import Desd from './component/Desd';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import EditDbda from './component/EditDbda';
import EditDesd from './component/EditDesd';

import LoginForm from './component/LoginForm';
import Welcome from './component/Welcome';
import AddDbda from './component/AddDbda';
import AddDesd from './component/AddDesd';


function App() {
  return (
<>
     <Navbar/>
     <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/dac' element={<Dac/>}></Route>
      <Route path='/dbda' element={<Dbda/>}></Route>
      <Route path='/desd' element={<Desd/>}></Route>
      <Route path='dac/addProduct' element={<AddProduct/>}></Route>
      <Route path='dac/editProduct' element={<EditProduct/>}></Route>
      <Route path='dbda/add' element={<AddDbda/>}></Route>
      <Route path='desd/add' element={<AddDesd/>}></Route>
      <Route path='dbda/edit' element={<EditDbda/>}></Route>
      <Route path='desd/edit' element={<EditDesd/>}></Route>


     </Routes>
    </>  );
}

export default App;
