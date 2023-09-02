import { Link } from 'react-router-dom'
import menuItems from '../data/MenuSections.json'

const NavBar = () => {


  const menu = menuItems.map(menuItem => {
    return (
      <li key={menuItem.id}>
        <Link to={`/${menuItem.sectionName}`} style={{ textDecoration: 'none', fontWeight: 700,fontsize: '1.2rem', color:'#fdfffc'}}>
          {menuItem.sectionName}
        </Link>
      </li>
    )


  });

  return (
    <div className="NavBar">
      <h1>MyPortfolio.</h1>
      <ul>
        {menu}
      </ul>

    </div>
  )
}

export default NavBar
