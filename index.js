function hasTargetSum(array, target) {
  // Write your algorithm here
  for (var i = 0; i< array.length; i++){
    for (var j = i+1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      };

    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
O(N*2)
  */

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
   Iterating through the loop by comparing the index number with all the items in the array,
  ... to confirm if the adds up to the target. If index at [0] fails to find the total sum number, i move to index [1] and compare 
  with all the items in the array and so on untill its done
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-5, 10, 7, 3], 5));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;
