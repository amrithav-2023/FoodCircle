import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestView from './pages/RestView';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurent-view/:id' element={<RestView/>} /> {/*  : is added after / in path to understand that what comes next is a parameter */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
