import menuItems from '../data/MenuSections.json'

const NavBar = () => {

  const menu = menuItems.map(menuItem=>{
  return <li key={menuItem.id}>{menuItem.sectionName}</li>
  })

  return (
    <div className="NavBar">
        <h1>Portfolio.</h1>
        <ul>
          {menu}

        </ul>

    </div>
  )
}

export default NavBar
