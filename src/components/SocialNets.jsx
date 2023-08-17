import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg'


const SocialNets = () => {
  return (
    <div className="SocialNets">   
        <a href="https://www.linkedin.com/in/mauriciojavierchaile/" target='blank' > <img className="socicon" src={linkedin} alt="linkedin" /> </a>
        <a href="https://github.com/MauriJC" target='blank' ><img className="socicon" src={github} alt="github" /></a>
    </div>
  )
}

export default SocialNets
