import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SocialNets from './components/SocialNets';


function App() {


  return (
    <>

      <div className="main">
        <SocialNets></SocialNets>
        <NavBar></NavBar>
        <Banner></Banner>
      </div>


    </>
  )
}

export default App
