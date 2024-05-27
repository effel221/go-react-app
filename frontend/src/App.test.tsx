import { render } from '@testing-library/react'
import App from './App'
import StoreProvider from "./StoreProvider";
import {describe, it, vi, afterEach, beforeEach} from 'vitest';
import * as fetchResult from "./lib/useDataFetch";


describe('App', () => {
    const mockCard = [{
        realName: 'test name',
        playerName: 'test playerName',
        asset: 'test asset'
    }]
    beforeEach(() => {
        vi.clearAllMocks();
    });
    afterEach(() => {
        vi.restoreAllMocks()
    })
    it('renders the App component', () => {
        const fetch = vi.spyOn(fetchResult, 'useDataFetch');
        fetch.mockImplementationOnce(() => mockCard);
        render(<StoreProvider><App /></StoreProvider>)
    })
})


