import reducer, {setCardsValue, setCurrentCardValue} from '../cardsStore.js';
import { test, expect } from 'vitest';
import {CardsSliceInterface} from "../../lib/interfaces";

const mockCard = [{
  realName: 'test name',
  playerName: 'test playerName',
  asset: 'test asset'
}]

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual(
    {  cardsValue: [],
       currentCard: null,
    })
})

test('should handle a cardsValue being updated', () => {
    const previousState: CardsSliceInterface = {
        cardsValue: [],
        currentCard: null
    }

    const expectedState =  {
        cardsValue: mockCard,
        currentCard: null,
   }
   expect(reducer(previousState, setCardsValue(mockCard))).toEqual(expectedState)
})

test('should handle a currentCard being updated', () => {
    const previousState: CardsSliceInterface = {
        cardsValue: [],
        currentCard: null
    }

    const expectedState =  {
        cardsValue: [],
        currentCard: mockCard[0],
    }
    expect(reducer(previousState, setCurrentCardValue(mockCard[0]))).toEqual(expectedState)
})
