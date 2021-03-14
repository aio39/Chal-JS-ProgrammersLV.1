const testCase = 'testPyYp';

function solution(s = testCase) {
  const arr = s.split('');
  const countP = arr.filter((l) => l == 'p' || l == 'P');
  const countY = arr.filter((l) => l == 'y' || l == 'Y');

  var answer = countP.length == countY.length;

  return answer;
}

console.log(solution());

/*   테스트 결과 
    테스트 1 〉	통과 (0.10ms, 29.8MB)
    테스트 2 〉	통과 (0.09ms, 30.1MB)
    테스트 3 〉	통과 (0.09ms, 29.9MB)
    테스트 4 〉	통과 (0.06ms, 30.1MB)
    테스트 5 〉	통과 (0.09ms, 30MB)
    테스트 6 〉	통과 (0.11ms, 30.1MB)
    테스트 7 〉	통과 (0.11ms, 30MB)
    테스트 8 〉	통과 (0.10ms, 30MB)
    테스트 9 〉	통과 (0.12ms, 30MB)
    테스트 10 〉 통과 (0.10ms, 29.8MB)
    테스트 11 〉 통과 (0.10ms, 29.9MB)
    테스트 12 〉 통과 (0.11ms, 30MB)
    테스트 13 〉 통과 (0.11ms, 29.9MB)
    테스트 14 〉 통과 (0.11ms, 30.2MB)
    테스트 15 〉 통과 (0.11ms, 30MB)
    테스트 16 〉 통과 (0.10ms, 30MB)
    테스트 17 〉 통과 (0.11ms, 29.8MB)
    테스트 18 〉 통과 (0.10ms, 29.9MB)
    테스트 19 〉 통과 (0.11ms, 30MB)
    테스트 20 〉 통과 (0.10ms, 30MB)
    테스트 21 〉 통과 (0.11ms, 29.9MB)
    테스트 22 〉 통과 (0.10ms, 30.1MB)
    테스트 23 〉 통과 (0.10ms, 30MB)
    테스트 24 〉 통과 (0.10ms, 30MB)
    테스트 25 〉 통과 (0.10ms, 30MB)
    테스트 26 〉 통과 (0.10ms, 30MB)
    테스트 27 〉 통과 (0.13ms, 30MB)
    테스트 28 〉 통과 (0.12ms, 30MB)
 */
