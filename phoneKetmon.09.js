// const nums = [3, 3, 3, 2, 2, 4];
const nums = [3, 3, 3, 2, 2, 2];

function solution(numsTemp) {
  var answer = 0;
  const max = nums.length / 2;
  console.log(`최대값은 ${max}`);
  const uniqueNums = Array.from(new Set(nums)).length;
  console.log(uniqueNums);
  if (uniqueNums <= max) {
    answer = uniqueNums;
  } else {
    answer = max;
  }

  return answer;
}

/*  결과 
테스트 1 〉	통과 (4.47ms, 30.1MB)
테스트 2 〉	통과 (4.27ms, 30.1MB)
테스트 3 〉	통과 (4.24ms, 30.1MB)
테스트 4 〉	통과 (4.31ms, 30.4MB)
테스트 5 〉	통과 (4.46ms, 30.2MB)
테스트 6 〉	통과 (4.41ms, 30.2MB)
테스트 7 〉	통과 (4.49ms, 30.1MB)
테스트 8 〉	통과 (4.42ms, 30.1MB)
테스트 9 〉	통과 (4.20ms, 30.1MB)
테스트 10 〉	통과 (4.53ms, 30MB)
테스트 11 〉	통과 (4.43ms, 30.1MB)
테스트 12 〉	통과 (4.35ms, 30.2MB)
테스트 13 〉	통과 (4.55ms, 30.2MB)
테스트 14 〉	통과 (4.22ms, 29.8MB)
테스트 15 〉	통과 (4.23ms, 30MB)
테스트 16 〉	통과 (4.98ms, 30.1MB)
테스트 17 〉	통과 (4.96ms, 30.1MB)
테스트 18 〉	통과 (4.86ms, 30.2MB)
테스트 19 〉	통과 (4.56ms, 30.1MB)
테스트 20 〉	통과 (4.54ms, 30.3MB)
 */

solution();
