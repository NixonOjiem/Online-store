import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ElectronicsScreen from './pages/ElectronicsScreen';
import CutleryScreen from './pages/CutleryScreen';
import FunitureScreen from './pages/FunitureScreen';
import PromotionsScreen from './pages/PromotionsScreen';
import ClothingScreen from './pages/ClothingScreen';
import HomeScreen from './pages/HomeScreen';
import ErrorScreen from './pages/ErrorScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<HomeScreen  />}/>
          <Route path="/home" element={<HomeScreen  />}/>
          <Route path='/electronics' element={<ElectronicsScreen />} />
          <Route path= '/cutlery' element={<CutleryScreen />} />
          <Route path='/furniture' element={<FunitureScreen />} />
          <Route path= '/promotion' element={<PromotionsScreen />} />
          <Route path='/clothing' element={<ClothingScreen />} />
          <Route path='/*' element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
