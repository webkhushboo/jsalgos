/**
 * First we need to find the parameter for maximizing the cost 
 * If we will sort the array by any city cost then it wouldn't work , so we need to take the absolute difference
 * between two city cost and consider it as paramter for maximising the cost for interview.
 * After this we know we have to distribute the total 2N people into 2 cities then total no of persons going to city A would be n
 * total no of persons going to city b will be B
 * 1. Take the absolute difference between city cost
 * 2. Sort this in descending order
 * 3. Calculate the cost for city A and city B based upon it
 * @param {*} costs 
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  const n = costs.length / 2;
  let countA = 0;
  let countB = 0;
  let sum = 0;

  for (let i = 0; i < costs.length; i++) {
    const costCityA = costs[i][0];
    const costCityB = costs[i][1];

    if (costCityA < costCityB) {
      if (countA < n) {
        sum += costCityA;
        countA++;
      }
      else {
        sum += costCityB;
        countB++;
      }
    }
    else {
      if (countB < n) {
        sum += costCityB;
        countB++;
      }
      else {
        sum += costCityA;
        countA++;
      }
    }
  }
  return sum;
};