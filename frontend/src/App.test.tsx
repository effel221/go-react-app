import { render } from '@testing-library/react'
import App from './App'
import StoreProvider from "./StoreProvider";


describe('App', () => {
    it('renders the App component', () => {
        render(<StoreProvider><App /></StoreProvider>)
    })
})


