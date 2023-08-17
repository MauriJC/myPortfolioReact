import pic from '../images/yo.png'

const Banner = () => {
  return (
    <div className="Banner">
      <div className="left-side">
        <h1>Hi, I'm Mauricio Chaile</h1>
        <h2>Frontend developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, in, pariatur reprehenderit dicta veniam eligendi sit, consectetur corporis labore at iste ratione? Ducimus error aut incidunt quis iusto nulla dolorem!</p>
        <button>Hire me</button>
      </div>

      <div className="image-container">
        <img src={pic} alt="Mauricio" />
      </div>



    </div>
  )
}

export default Banner
