/* eslint-disable no-undef */
import {render, screen} from "@testing-library/react"
import App from '../App'
import Cart from './Cart'
import { Provider } from "react-redux"
import { expect } from "vitest"


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import About from './About'
import Shop from './Shop'
import Admin from './Admin'
import LoginPage from './LoginPage'

import storee from '../redux/store.js'

 
test('secound test', () =>{

    
       
    
 
    render( <Provider store={storee}>
                <App>
                    <Routes>
                        
                        <Route path='/Cart' exact element={<Cart/>} />
                  
                    </Routes>
                </App>
            </Provider>)

   screen.debug()
   
   
})