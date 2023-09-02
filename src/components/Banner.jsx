import pic from '../images/yo.png'

const Banner = () => {
  return (
    <div className="Banner">
      <div className="left-side">
        <h1>Hi, I am Mauricio Chaile</h1>
        <h2>Frontend developer</h2>
        <p>"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs</p>
        <button>Hire me</button>
      </div>

      <div className="image-container">
        <img src={pic} alt="Mauricio" />
      </div>



    </div>
  )
}

export default Banner
