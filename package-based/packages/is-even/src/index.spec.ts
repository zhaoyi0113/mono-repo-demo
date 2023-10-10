import { isEven } from 'is-even'

describe('test suite', () => {
  it('shoudl be able to call isEven', () => {
    expect(isEven(0)).toBeTruthy();
  })
})