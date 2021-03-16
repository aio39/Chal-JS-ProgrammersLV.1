function solution(numbers, hand) {
  let leftHandPosition = 3;
  let rightHandPosition = 3;

  let isLeftCenter = false;
  let isRightCenter = false;

  const handleSideTouch = (pushNum) => {
    if (pushNum % 3 == 2 || pushNum == 0) {
      return handleCenterTouch(pushNum);
    } else if (pushNum % 3 == 1) {
      leftHandPosition = Math.floor(pushNum / 3);
      isLeftCenter = false;
      return 'L';
    } else {
      rightHandPosition = pushNum / 3 - 1;
      isRightCenter = false;
      return 'R';
    }
  };

  const handleCenterTouch = (pushNum) => {
    let leftAbs;
    let rightAbs;
    let numPosition;
    if (pushNum == 0) {
      numPosition = 3;
    } else {
      numPosition = Math.floor(pushNum / 3);
    }
    if (isLeftCenter) {
      leftAbs = Math.abs(numPosition - leftHandPosition) - 1;
    } else {
      leftAbs = Math.abs(numPosition - leftHandPosition);
    }
    if (isRightCenter) {
      rightAbs = Math.abs(numPosition - rightHandPosition) - 1;
    } else {
      rightAbs = Math.abs(numPosition - rightHandPosition);
    }
    if (leftAbs - rightAbs == 0) {
      if (hand == 'left') {
        leftHandPosition = numPosition;
        isLeftCenter = true;
        return 'L';
      } else {
        rightHandPosition = numPosition;
        isRightCenter = true;
        return 'R';
      }
    } else if (rightAbs - leftAbs > 0) {
      leftHandPosition = numPosition;
      isLeftCenter = true;
      return 'L';
    } else {
      rightHandPosition = numPosition;
      isRightCenter = true;
      return 'R';
    }
  };

  let answer = '';
  numbers.forEach((n) => {
    answer += handleSideTouch(n);
  });

  return answer;
}

const testCase = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'];
console.log(solution(testCase[0], testCase[1]));

/*
 테스트 1 〉	통과 (0.15ms, 30.1MB)
테스트 2 〉	통과 (0.21ms, 30.1MB)
테스트 3 〉	통과 (0.15ms, 30.3MB)
테스트 4 〉	통과 (0.10ms, 30.2MB)
테스트 5 〉	통과 (0.20ms, 29.7MB)
테스트 6 〉	통과 (0.21ms, 30.1MB)
테스트 7 〉	통과 (0.21ms, 30.1MB)
테스트 8 〉	통과 (0.25ms, 30.3MB)
테스트 9 〉	통과 (0.22ms, 30.2MB)
테스트 10 〉	통과 (0.22ms, 30.1MB)
테스트 11 〉	통과 (0.24ms, 30.2MB)
테스트 12 〉	통과 (0.23ms, 30.4MB)
테스트 13 〉	통과 (0.26ms, 30.2MB)
테스트 14 〉	통과 (0.29ms, 30.1MB)
테스트 15 〉	통과 (0.40ms, 30.3MB)
테스트 16 〉	통과 (0.39ms, 30.2MB)
테스트 17 〉	통과 (0.36ms, 30.3MB)
테스트 18 〉	통과 (0.55ms, 30.2MB)
테스트 19 〉	통과 (0.58ms, 30.5MB)
테스트 20 〉	통과 (0.59ms, 29.9MB)
 */
