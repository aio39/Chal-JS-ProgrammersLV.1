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

const crypto = (chra, n) => {
  if (chra == ' ' || chra == '.') return ' ';
  if (chra == chra.toUpperCase()) {
    return moveChar(upper, n, chra);
  } else {
    return moveChar(lower, n, chra);
  }
};

const moveChar = (arr, n, chra) => {
  const index = arr.indexOf(chra);
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
