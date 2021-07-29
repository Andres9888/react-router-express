import { NavLink } from 'react-router-dom'

function Nav () {
  return (
    <div className='Nav'>
      <ul className='Nav__List'>
        <NavLink className='Nav__Link' to='/' activeClassName='activeRoute'>
          Search Wiki
        </NavLink>
        <NavLink
          className='Nav__Link'
          to='/top-albums'
          activeClassName='activeRoute'
        >
          Top Albums
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
