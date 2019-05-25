/*

Write a function
  
  function solution(A);

that, given an array A of N integers, returns an array T of N JavaScript objects.
For any two indices i, j < N, the following conditions should be true:

  T[i].value() === A[i]
  T[j].value() === A[j]
  T[i].value === T[j].value
  !T[i].hasOwnProperty('value')
  !T[j].hasOwnProperty('value')

where 

  T = solution(A)

For example, given A = [4, 2], your functioin should return such array T, that

  T[0].value() === 4
  T[1].value() === 2
  T[0].value === T[1].value
  !T[0].hasOwnProperty('value');
  !T[1].hasOwnProperty('value');

*/

class Item {
  constructor(val) {
    this.val = val;
  }
  value() {
    return this.val;
  }
}

function solution(A) {
  const T = [];

  for (let i = 0; i < A.length; i++) {
    T[i] = new Item(A[i]);
  }

  return T;
}

const A = [4, 2];

const T = solution(A);
