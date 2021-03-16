function solution(numbers, hand) {
  let leftHandPosition = 3;
  let rightHandPosition = 3;

  const handleSideTouch = (pushNum) => {
    if (pushNum % 3 == 2 || pushNum == 0) {
      return handleCenterTouch(pushNum);
    } else if (pushNum % 3 == 1) {
      leftHandPosition = Math.floor(pushNum / 3);
      console.log(answer);
      return 'L';
    } else {
      rightHandPosition = pushNum / 3 - 1;
      console.log(answer);
      return 'R';
    }
  };

  const handleCenterTouch = (pushNum) => {
    let numPosition;
    if (pushNum == 0) {
      numPosition = 3;
    } else {
      numPosition = Math.floor(pushNum / 3);
    }
    const leftAbs = Math.abs(numPosition - leftHandPosition);
    const rightAbs = Math.abs(numPosition - rightHandPosition);
    if (leftAbs - rightAbs == 0) {
      if (hand == 'left') {
        leftHandPosition = numPosition;
        console.log(answer);
        return 'L';
      } else {
        rightHandPosition = numPosition;
        console.log(answer);
        return 'R';
      }
    } else if (rightAbs - leftAbs > 0) {
      leftHandPosition = numPosition;
      console.log(answer);

      return 'L';
    } else {
      rightHandPosition = numPosition;
      console.log(answer);
      return 'R';
    }
  };

  let answer = '';
  numbers.forEach((n) => {
    answer += handleSideTouch(n);
  });

  return answer;
}

const testCase = [[4, 5, 9, 5], 'right'];
console.log(solution(testCase[0], testCase[1]));

//40점
