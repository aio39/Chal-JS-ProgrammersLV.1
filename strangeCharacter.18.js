function solution(s) {
  const arr = s.split(' ');
  arr.forEach((word) => transWord(word));
  var answer = arr.join('');
  return answer;
}

const transWord = (word) => {
  if (word == '') return '';
  word = word.split('');
  for (let i = 0; i < word.length; ) {
    word[i] = word[i].toUpperCase();
    i += 2;
  }
  return word.join('');
};

const testCase = 'try h el lo w or ld';
console.log(solution(testCase));

// 테스트 코드만 성공
