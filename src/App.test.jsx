/* eslint-disable no-undef */
import {render, screen} from "@testing-library/react"
import App from './App'
import { Provider } from "react-redux"
import { expect } from "vitest"




import storee from './redux/store.js'

 
test('first test', () =>{

 
    render( <Provider store={storee}>
                <App/>
            </Provider>)
    const message = screen.queryByText(/itjusttest/i)
    expect(message).toBeInTheDocument()
})