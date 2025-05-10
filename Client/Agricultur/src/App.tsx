import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/User/Login/Login';
import Weather from './Pages/Weather/Weather';
// import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Registration from './Pages/User/Registration/Registration';


function App() {

  return (
    <div className='App' >
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
