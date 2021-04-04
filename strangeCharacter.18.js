function solution(s) {
  const arr = s.split(' ');
  console.log(arr);
  const strangeWord = arr.map((word) => transWord(word));
  var answer = strangeWord.join(' ');
  return answer;
}

const transWord = (wordVar) => {
  if (wordVar == '') return '';
  const splittedChar = wordVar.split('');
  for (let i = 0; i < splittedChar.length; i++) {
    if (i % 2 === 1) {
      splittedChar[i] = splittedChar[i].toLowerCase();
    } else {
      splittedChar[i] = splittedChar[i].toUpperCase();
    }
  }
  return splittedChar.join('');
};

const testCase = 'tRy hELLo world';
console.log(solution(testCase));
/* 
테스트 1 〉	통과 (5.63ms, 30.4MB)
테스트 2 〉	통과 (5.13ms, 30.3MB)
테스트 3 〉	통과 (5.51ms, 30.2MB)
테스트 4 〉	통과 (5.26ms, 30.2MB)
테스트 5 〉	통과 (5.43ms, 30.5MB)
테스트 6 〉	통과 (4.91ms, 30.1MB)
테스트 7 〉	통과 (5.09ms, 29.9MB)
테스트 8 〉	통과 (5.51ms, 30.2MB)
테스트 9 〉	통과 (5.19ms, 30.4MB)
테스트 10 〉	통과 (5.59ms, 30.4MB)
테스트 11 〉	통과 (5.04ms, 30.3MB)
테스트 12 〉	통과 (5.71ms, 30.3MB)
테스트 13 〉	통과 (4.99ms, 30.3MB)
테스트 14 〉	통과 (5.02ms, 30.3MB)
테스트 15 〉	통과 (5.33ms, 30.5MB)
테스트 16 〉	통과 (6.00ms, 30.4MB)
 */
