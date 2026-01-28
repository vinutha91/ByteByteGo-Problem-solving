/**
  Given an array of integers sorted in ascending order and a target value, 
return the indexes of any pair of numbers in the array that sum to the target. The order of the indexes in the result doesn't matter. If no pair is found, return an empty array.
**/

// Solution 1 - brute force using 2 loops - complexity - O(n2)

const nums = [-5, -2, 3, 4, 6];
const target = 7;
const output = [];
//Output: [2, 3]
let found  = false;

for(let i=0;i<nums.length;i++){
  for(let j=1;j<nums.length;j++){
    if(nums[i] + nums[j] === target && !found){
      output.push(i);
      output.push(j);
      found = true;
    }
  }
}
console.log(output);

//solution 2 using 2 pointers.
function pairSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    // If sum is smaller, move left pointer to increase sum
    if (sum < target) {
      left += 1;
    }
    // If sum is larger, move right pointer to decrease sum
    else if (sum > target) {
      right -= 1;
    }
    // Target pair found
    else {
      return [left, right];
    }
  }

  // No pair found
  return [];
}

//Solution 3 using Map
/*
  Mental model

At every step, you ask:

“Have I already seen the number that would complete this pair?”

That’s all this algorithm does.
*/
const nums = [-5, -2, 3, 4, 6];
const target = 7;

const map = new Map();

for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];

  if (map.has(complement)) {
    console.log([map.get(complement), i]);
    break;
  }

  map.set(nums[i], i);
}


