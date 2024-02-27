import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer2 from './components/footer2/Footer2';
import Home from './components/home/Home';
import { MenuProvider } from './context/MenuContext';


function App() {
  return (
    <BrowserRouter>
    <MenuProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    
     <Footer2/>
    </MenuProvider>
     
    
    </BrowserRouter>
   
  );
}

export default App;
