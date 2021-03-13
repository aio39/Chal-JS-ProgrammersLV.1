const numbers = [1, 1, 0, 0, 0, 0, 0, 0, 0];
function solution(num) {
  var answer = [numbers[0] + numbers[1]];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        let sum = numbers[i] + numbers[j];
        if (answer.find((n) => n == sum) || sum == 0) {
          if (sum == 0 && answer[0] != 0) {
            console.log('영이 추가됨');
            answer.unshift(0);
          }
          continue;
        }
        for (let k = 0; k < answer.length; k++) {
          if (sum < answer[k]) {
            answer.splice(k, 0, sum);
            break;
          }
          if (k == answer.length - 1) {
            answer.splice(k + 1, 0, sum);
            break;
          }
        }
      }
    }
  }

  return answer;
}

result = solution();
console.log(result);

//  find vs findIndex  비슷

// [NaN].indexOf(NaN) > -1 is false
// [NaN].includes(NaN) is true
