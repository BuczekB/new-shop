
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { isAdminLogged } from '../redux/actions/productActions'

import {useNavigate} from 'react-router-dom'


function LoginPage() {

    const LOGIN = import.meta.env.VITE_LOGIN
    const PASSWORD = import.meta.env.VITE_PASSWORD

    const isOnline = useSelector((state) => state.isAdminLogged.isLogged)
    const dispatch = useDispatch()



    const navigate = useNavigate()

const [log, setLog] = useState({
    login: '',
    password: ''
})

console.log(isOnline);

useEffect(() =>{
    if(isOnline){
        navigate('/AdminLogged')
    }    
},[])


const handleLogin = (e) =>{
    const {name, value} = e.target

    setLog((prev) =>{
        return {...prev, [name]: value}
    })

    
}

const signIn = (e) =>{
    e.preventDefault

  


    if(log.login === 'admin123' || log.password === 'admin123'){
        dispatch(isAdminLogged(true))
        navigate('/AdminLogged')
    }else{
        alert('wrong password')
        dispatch(isAdminLogged(false))
    }
}
   

    return (
      <div className='loginPage'>
            <div className="loginBox">
                <label type='text'>Login</label>
                <input className="loginInput" name="login" onChange={handleLogin}></input>
            </div>
            <div className="passwordInput">
                <label type='text'>Password</label>
                <input className="passwordInput" name="password" onChange={handleLogin}></input>
            </div>
            <button onClick={signIn}>Sign In</button>
      </div>
    )
  }
  
  export default LoginPage
  
