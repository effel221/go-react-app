import { render, screen } from '@testing-library/react'
import CardsOverview from "./index";
import * as useSelectorOutput from "../lib/hooks";
import {describe, it, vi, afterEach, expect, beforeEach} from 'vitest';
import StoreProvider from "../StoreProvider";

describe('CardsOverview', () => {
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
    it('renders the CardsOverview component with mock data', () => {
        const spy = vi.spyOn(useSelectorOutput, 'useAppSelector');
        spy.mockImplementationOnce(() => mockCard);
        render(<StoreProvider><CardsOverview/></StoreProvider>)
        const heading = screen.getByRole('heading', { level: 2 });
        const items = screen.getAllByRole("listitem");
        expect(heading.innerHTML).toBe('Overview');
        expect(items.length).toBe(1);
    })
})

