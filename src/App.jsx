
import './App.scss'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import FetchData from './container/FetchData.jsx'
import Navigation from './container/Navigation'

import About from './container/About'
import Shop from './container/Shop'
import Admin from './container/Admin'
import Cart from './container/Cart'
import LoginPage from './container/LoginPage'

function App() {

  return (
    <div className='app'>
   <Router>
   <Navigation></Navigation>
    <Routes>
    <Route path='/' exact element={<About/>} />
    <Route path='/About' exact element={<About/>} />
    <Route path='/Shop' exact element={<Shop/>} />
    <Route path='/Admin' exact element={<LoginPage/>} />
    <Route path='/AdminLogged' exact element={<Admin/>} />
    <Route path='/Cart' exact element={<Cart/>} />
    <Route>404 Not Found</Route>
    </Routes>
    <FetchData></FetchData>
   </Router>
    </div>
  )
}

export default App
