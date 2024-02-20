const findTargetIndex = require('./findTargetIndex');

it('Should return the target index if exists in the array', () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const expected = 4;

  const result = findTargetIndex(nums, target);
  expect(result).toBe(expected);
});

it('Should return -1 if the target does not exists in the array', () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 2;
  const expected = -1;

  const result = findTargetIndex(nums, target);
  expect(result).toEqual(expected);
});

it('Should return -1 if array is empty', () => {
  const nums = [];
  const target = 5;
  const expected = -1;

  const result = findTargetIndex(nums, target);
  expect(result).toEqual(expected);
});
