import { render, screen } from '@testing-library/react'
import CardsOverview from "./index";
import * as useSelectorOutput from "../lib/hooks";
import * as fetchResult from "../lib/useDataFetch";
import {describe, it, vi, afterEach, expect, beforeEach} from 'vitest';
import StoreProvider from "../StoreProvider";

describe('CardsOverview', () => {
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
    it('renders the CardsOverview component with mock data with selected card', () => {
        const fetch = vi.spyOn(fetchResult, 'useDataFetch');
        const spy = vi.spyOn(useSelectorOutput, 'useAppSelector');
        spy.mockImplementationOnce(() => mockCard);
        fetch.mockImplementationOnce(() => mockCard);
        const { container } = render(<StoreProvider><CardsOverview/></StoreProvider>)
        const heading = screen.getByRole('heading', { level: 2 });
        const items = screen.getAllByRole("listitem");
        expect(heading.innerHTML).toBe('Overview');
        expect(items.length).toBe(1);
        expect(container.querySelector('.card-selected')).toBeInTheDocument();
    })
})

