import { render, fireEvent } from '@testing-library/react'
import * as useSelectorOutput from "../lib/hooks";
import {describe, it, vi, afterEach, beforeEach, expect} from 'vitest';
import StoreProvider from "../StoreProvider";
import Controls from "./index";

describe('Controls', () => {
    const mockCard = [{
        realName: 'test name',
        playerName: 'test playerName',
        asset: 'test asset',
        selected: true
    }]
    beforeEach(() => {
      vi.clearAllMocks();
    });
    afterEach(() => {
        vi.restoreAllMocks()
    })
    it('renders the Controls and trigger redux store update on button click', () => {
        const spy = vi.spyOn(useSelectorOutput, 'useAppSelector');
        spy.mockImplementationOnce(() => mockCard);
        const { container } = render(<StoreProvider><Controls/></StoreProvider>);
        const button = container.querySelector('.controls-sorting-desc') as HTMLButtonElement;
        fireEvent.click(button);
        expect(spy).toHaveBeenCalled()
    })
})

