'use strict';
function solution(n) {
  var answer = numToSuica(n);
  return answer;
}

function numToSuica(n) {
  let suica = '';
  let isEven = true;
  for (let i = 0; i < n; i++) {
    if (isEven) {
      suica += '수';
    } else {
      suica += '박';
    }
    isEven = !isEven;
  }
  return suica;
}

console.log(solution(5));
