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
  console.log(isOnline, 'isOnline');

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
        <span>Fake Shop</span>
        <Link to='/About'><li className='navItem'>About</li></Link>
        <Link to='/Shop'><li className='navItem'>Shop</li></Link>
        <Link to='/Admin'><li className='navItem'>Admin</li></Link>
        <Link to='/Cart'><li className='navItem'>Cart</li></Link>
        <button onClick={logOut} className={isOnline? 'buttonOn' : 'buttonOff'}>Log Out</button>
       </ul>
    </nav>
  )
}

export default Navigation
