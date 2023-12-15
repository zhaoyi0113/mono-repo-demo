import { isEven, notCoverage } from 'is-even';

describe('test suite', () => {
  it('shoudl be able to call isEven', () => {
    expect(isEven(0)).toBeTruthy();
  });

  it('should be able to call', async () => {
    await notCoverage();
  })
});
