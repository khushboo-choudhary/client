// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Routes, Route,Navigate} from "react-router-dom"
import { useSelector} from 'react-redux';

const PrivateRoute = ({isAuthenticate, children}) => {
  return isAuthenticate ? children : <Navigate to={"/login"}/> 
}
function App() {
  const isAuthenticate = useSelector((store) => store.isAuth)
  console.log(isAuthenticate);
 
  return (
    <div className="App">
  
     {/* <Login/>
     <Signup/>
     <Home/> */}
     <Routes>
      {/* <Route path='/' element={<Home/>}/> */}

      <Route path='/login' element={<Login/>}/>

      <Route path='/signup' element={<Signup/>}/>

      <Route path='/' element={
          <PrivateRoute isAuthenticate={isAuthenticate}><Home/></PrivateRoute>
        }></Route>
     </Routes>


    </div>
  );
}

export default App;
