import { Link } from "react-router-dom"


const NoMatch = () => {
  return (
    <div className="NoMatch">
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/" style={{  fontWeight: 700, fontsize: '1.2rem', color: '#dfe213' }}>Go to the home page</Link>
      </p>
    </div>
  )
}

export default NoMatch

