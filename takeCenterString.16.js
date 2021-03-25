function solution(s = testCase) {
  const isOdd = s.length % 2 == 1;
  const centerIndex = Math.floor(s.length / 2);
  console.log(isOdd, centerIndex);
  if (isOdd) {
    return s.slice(centerIndex, centerIndex + 1);
  } else {
    return s.slice(centerIndex - 1, centerIndex + 1);
  }
}

const testCase = 'qedw';
console.log(solution(testCase));

/* 
    테스트 1 〉	통과 (4.38ms, 30.1MB)
    테스트 2 〉	통과 (4.45ms, 30.2MB)
    테스트 3 〉	통과 (4.34ms, 30.3MB)
    테스트 4 〉	통과 (4.55ms, 30.3MB)
    테스트 5 〉	통과 (4.26ms, 29.7MB)
    테스트 6 〉	통과 (4.32ms, 30.2MB)
    테스트 7 〉	통과 (4.62ms, 30.4MB)
    테스트 8 〉	통과 (4.24ms, 30MB)
    테스트 9 〉	통과 (4.55ms, 30.1MB)
    테스트 10 〉 통과 (4.37ms, 30.2MB)
    테스트 11 〉 통과 (4.53ms, 30.1MB)
    테스트 12 〉 통과 (4.26ms, 30MB)
    테스트 13 〉 통과 (4.39ms, 30.3MB)
    테스트 14 〉 통과 (4.45ms, 30.2MB)
    테스트 15 〉 통과 (4.43ms, 30.4MB)
    테스트 16 〉 통과 (4.55ms, 30MB)
 */
