import './App.css';
import Weather from './Pages/Weather/Weather';
// import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/User/Login/Login';
import Registration from './Pages/User/Registration/Registration';
import Home from './Pages/Home/Home';


function App() {

  return (
    <div className='App' >
      {/* <Header /> */}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
