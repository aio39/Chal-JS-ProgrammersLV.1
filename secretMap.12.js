function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const bin1 = fiveDigitConvert(arr1[i].toString(2), n);
    const bin2 = fiveDigitConvert(arr2[i].toString(2), n);
    console.log(bin1, bin2);

    answer.push(makeHashString(bin1, bin2, n));
  }

  return answer;
}

const fiveDigitConvert = (bin, n) => {
  bin = bin.split('');
  const short = n - bin.length;
  const zeroArr = [];
  for (let i = 0; i < short; i++) {
    zeroArr.push('0');
  }
  bin.splice(0, 0, ...zeroArr);
  return bin;
};

const makeHashString = (bin1, bin2, n) => {
  let hashString = '';
  for (let i = 0; i < n; i++) {
    if (bin1[i] == 1 || bin2[i] == 1) {
      hashString += '#';
    } else {
      hashString += ' ';
    }
  }
  return hashString;
};

const testCase = [5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]];

console.log(solution(...testCase));

/*  
테스트 1 〉	통과 (0.20ms, 30MB)
테스트 2 〉	통과 (0.25ms, 30MB)
테스트 3 〉	통과 (0.14ms, 30MB)
테스트 4 〉	통과 (0.21ms, 30.1MB)
테스트 5 〉	통과 (0.19ms, 30MB)
테스트 6 〉	통과 (0.22ms, 30.1MB)
테스트 7 〉	통과 (0.17ms, 30MB)
테스트 8 〉	통과 (0.18ms, 30MB)
 */
