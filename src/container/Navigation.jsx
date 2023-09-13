
import {Link} from 'react-router-dom'

import '../Style/Navigation.scss'

function Navigation() {

  return (
    <nav>
       <ul>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Shop'><li>Shop</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
        <Link to='/Cart'><li>Cart</li></Link>
       </ul>
    </nav>
  )
}

export default Navigation
