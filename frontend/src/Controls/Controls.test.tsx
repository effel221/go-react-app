import { render, fireEvent } from '@testing-library/react'
import * as useSelectorOutput from "../lib/hooks";
import * as fetchResult from "../lib/useDataFetch";
import {describe, it, vi, afterEach, beforeEach, expect, Mock} from 'vitest';
import StoreProvider from "../StoreProvider";
import Controls from "./index";
import {CardInterface} from "../lib/interfaces";


global.fetch = vi.fn() as Mock;

describe('Controls', () => {
    const mockCard = [{
        realName: 'test name',
        playerName: 'test playerName',
        asset: 'test asset',
        selected: true
    }]
    function createFetchResponse(data:CardInterface[]) {
        return { json: () => new Promise((resolve) => resolve(data)) }
    }
    beforeEach(() => {
      vi.clearAllMocks();
    });
    afterEach(() => {
        vi.restoreAllMocks()
    })
    it('renders the Controls and trigger redux store update on button click', () => {
        const spy = vi.spyOn(useSelectorOutput, 'useAppSelector');
        spy.mockImplementationOnce(() => mockCard);
        const useDataFetch = vi.spyOn(fetchResult, 'useDataFetch');
        useDataFetch.mockImplementationOnce(() => mockCard);
        (fetch as Mock).mockResolvedValue(createFetchResponse(mockCard))
        const { container } = render(<StoreProvider><Controls/></StoreProvider>);
        const button = container.querySelector('.controls-sorting-desc') as HTMLButtonElement;
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled()
    })
})

