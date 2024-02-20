const findTargetIndex = require('./findTargetIndex');

it('Should return the target index if its in array', () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const expected = 4;

  const result = findTargetIndex(nums, target);
  expect(result).toBe(expected);
});