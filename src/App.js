import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/Weather.js" element={<Weather/>}></Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
