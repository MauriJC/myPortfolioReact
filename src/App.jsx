import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SocialNets from './components/SocialNets';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './components/NoMatch';


function App() {


  return (
    <>

      <div className="main">

        <NavBar></NavBar>
        <SocialNets></SocialNets>

        <Routes>
        <Route path="/home" element={<Banner />}/>

          
          <Route path="*" element={<NoMatch />} />
        </Routes>



      </div>


    </>
  )
}

export default App
