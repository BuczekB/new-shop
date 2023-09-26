import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { isAdminLogged } from '../redux/actions/productActions'

import '../Style/Navigation.scss'

function Navigation() {


  const [isVisible, setIsVisible] = useState()

  const dispatch = useDispatch()
  const isOnline = useSelector((state) => state.isAdminLogged.isLogged)

  const navigate = useNavigate()

  useEffect(() =>{
    setIsVisible(isOnline)
  },[])

  

  const logOut = () =>{
    dispatch(isAdminLogged(false))
    navigate('./Admin')
  }
  
  return (
    <nav>
       <ul>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Shop'><li>Shop</li></Link>
        <Link to='/Admin'><li>Admin</li></Link>
        <Link to='/Cart'><li>Cart</li></Link>
        <button onClick={logOut} className={isOnline? 'buttonOff' : 'buttonOn'}>Log Out</button>
       </ul>
    </nav>
  )
}

export default Navigation
