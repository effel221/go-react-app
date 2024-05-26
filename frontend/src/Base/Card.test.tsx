import { render, screen, fireEvent } from '@testing-library/react'
import {describe, it, vi, afterEach, expect, beforeEach} from 'vitest';
import StoreProvider from "../StoreProvider";
import Card from "./Card";
import * as useDispatchOutput from "../lib/hooks";

describe('Card', () => {
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
    it('renders the Card component with mock data', () => {
        const spy = vi.spyOn(useDispatchOutput, 'useAppDispatch');
        render(<StoreProvider><Card card={mockCard}/></StoreProvider>)
        const liItem = screen.getAllByRole("listitem");
        expect(liItem.length).toBe(1);
        fireEvent.click(liItem[0]);
        expect(spy).toHaveBeenCalled()
    })
})

