import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer2 from './components/footer2/Footer2';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Home/>
     <Footer2/>
    
    </BrowserRouter>
   
  );
}

export default App;
