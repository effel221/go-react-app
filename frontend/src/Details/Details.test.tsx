import { render, screen } from '@testing-library/react'
import * as useSelectorOutput from "../lib/hooks";
import {describe, it, vi, afterEach, expect, beforeEach} from 'vitest';
import StoreProvider from "../StoreProvider";
import Details from "./index";

describe('Details', () => {
    const mockCard = {
        realName: 'test name',
        playerName: 'test playerName',
        asset: 'test asset'
    }
    beforeEach(() => {
      vi.clearAllMocks();
    });
    afterEach(() => {
        vi.restoreAllMocks()
    })
    it('renders the Details component with mock data', () => {
        const spy = vi.spyOn(useSelectorOutput, 'useAppSelector');
        spy.mockImplementationOnce(() => mockCard);
        render(<StoreProvider><Details/></StoreProvider>)
        const heading = screen.getByRole('heading', { level: 2 });
        const items = screen.getAllByRole("listitem");
        expect(heading.innerHTML).toBe('Details');
        expect(items.length).toBe(3);
    })
})

