function solution(n) {
  let digit;
  const arr = [];
  var answer = 0;

  for (let i = 1; true; i++) {
    if (n < 3 ** i) {
      digit = i;
      console.log(`3진법의 자리수는 : ${i} 입니다.`);
      break;
    }
  }

  for (let i = 0; 0 < digit; i++) {
    arr[i] = Math.floor(n / 3 ** (digit - 1));
    n = n % 3 ** (digit - 1);
    digit--;
  }
  console.log(`10진법을 3진법으로 치환한 값: ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) answer += arr[i] * 3 ** i;
  }

  return answer;
}

answer = solution(12);
console.log(`3진수를 리버싱 후 , 10진법으로 치환한 값: ${answer}`);
