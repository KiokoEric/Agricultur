import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/User/Login/Login';
import Weather from './Pages/Weather/Weather';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Cultivation from './Pages/Cultivation/Cultivation';
import Registration from './Pages/User/Registration/Registration';
import Pests_and_Diseases from './Pages/Pests_and_Diseases/Pests_and_Diseases';
import Create from './Pages/Create/Create';
import Details from './Pages/Details/Details';


function App() {

  return (
    <div className='App' >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/Cultivation' element={<Cultivation />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Pests_and_Diseases' element={<Pests_and_Diseases />} />
        <Route path='/Pests_and_Diseases_Details/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
