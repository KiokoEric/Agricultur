import './App.css';
import Weather from './Pages/Weather/Weather';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className='App' >
      <Header />
      <Routes>
        <Route path='/Weather' element={<Weather />} />
      </Routes>
    </div>
  )
}

export default App
