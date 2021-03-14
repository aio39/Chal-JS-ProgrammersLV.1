const upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'N',
  'M',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function solution(s, n) {
  const strArr = s.split('');
  let answer = '';
  console.log(strArr);
  strArr.forEach((chra) => (answer += crypto(chra, n)));

  return answer;
}

const crypto = (char, n) => {
  if (char == ' ' || char == '.') return ' ';
  if (char == char.toUpperCase()) {
    return moveChar(upper, n, char);
  } else {
    return moveChar(lower, n, char);
  }
};

const moveChar = (arr, n, char) => {
  const index = arr.indexOf(char);
  if (index + n > arr.length - 1) {
    return arr[index + n - 26];
  } else {
    return arr[index + n];
  }
};

const testCase = ['  AaZz  ', 25];

console.log(`answer:${solution(...testCase)}`);

/*  
const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upper = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ'.split('');
console.log(lower, upper);
 */
