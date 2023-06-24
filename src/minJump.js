/**
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let farthest = 0;
  let current = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (current == i) {
      jumps++;
      current = farthest;
    }
  }

  return jumps;
};
