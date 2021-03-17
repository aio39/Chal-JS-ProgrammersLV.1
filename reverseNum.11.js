'use strict';

function solution(n) {
  const numToArr = `${n}`.split('');
  const reversedArr = numToArr.reverse();
  const parseIntArr = reversedArr.map((x) => parseInt(x));

  const answer = parseIntArr;

  return answer;
}

const testCase = [10000, 1, 500];
testCase.forEach((n) => console.log(solution(n)));

/* 
테스트 1 〉	통과 (0.07ms, 30MB)
테스트 2 〉	통과 (0.07ms, 30.1MB)
테스트 3 〉	통과 (0.07ms, 30.1MB)
테스트 4 〉	통과 (0.09ms, 29.9MB)
테스트 5 〉	통과 (0.08ms, 30MB)
테스트 6 〉	통과 (0.08ms, 30.1MB)
테스트 7 〉	통과 (0.07ms, 29.9MB)
테스트 8 〉	통과 (0.07ms, 30.2MB)
테스트 9 〉	통과 (0.08ms, 29.9MB)
테스트 10 〉	통과 (0.07ms, 30.3MB)
테스트 11 〉	통과 (0.08ms, 30.2MB)
테스트 12 〉	통과 (0.05ms, 30.1MB)
테스트 13 〉	통과 (0.09ms, 30MB)
 */
