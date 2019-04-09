// option 1: Brute Force
let sumsToTarget = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(arr[i] + arr[j] == k) {
        return true;
      }
    }
  }
  return false;
}

// option 2: Hash Table
const sumToTarget = (arr, k) => {

  let HashSet = "";

  for (let l = 0; l < arr.length; l++) {
    if (values.contains(k - A[l])) return true;
    values.add(A[l]);
  }
  return false;
}

// option 3: Sort array and use binary search
let sumToTargets = (arr, k) => {
  arr.sort();

  let lhs = 0, rhs = arr.length - 1;

  while (lhs < rhs) {
    let sum = arr[lhs] + arr[rhs];
    if     (sum == k) return true;
    else if (sum < k) lhs++;
    else              rhs--;
  }

}