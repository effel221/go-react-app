import reducer, { cardsValue } from '../cardsStore.js';
import { test, expect } from 'vitest';

const mockCard = [{
  realName: 'test name',
  playerName: 'test playerName',
  asset: 'test asset'
}]

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { cardsValue: null })
})

test('should change searchValue value', () => {
  const previousState = {}
  expect(reducer(previousState, cardsValue(mockCard))).toEqual(
    { searchValue: mockCard }
  )
})
