function solution(n, lost, reserve) {
  // console.log(lost, reserve);
  lost = checkDuplicate(lost, reserve);
  // console.log(lost, reserve);
  const remainStolen = isCanRent(lost, reserve);

  var answer = n - remainStolen.length;

  return answer;
}

function checkDuplicate(lost, reserve) {
  return (lost = lost.filter((n) => {
    const indexDulp = reserve.findIndex((r) => r == n);
    if (indexDulp > -1) {
      reserve.splice(indexDulp, 1);
      return false;
    } else {
      return true;
    }
  }));
}

function isCanRent(lost, reserve) {
  return lost.filter((stolen) => {
    const forward = reserve.findIndex((r) => r == stolen - 1);
    if (forward > -1) {
      reserve.splice(forward, 1);
      return false;
    }
    const rear = reserve.findIndex((r) => r == stolen + 1);
    if (rear > -1) {
      reserve.splice(rear, 1);
      return false;
    }
    return true;
  });
}

const testCase = [5, [2, 4, 3], [1, 3, 5]];
console.log(solution(...testCase));

/* 
  테스트 1 〉	통과 (0.18ms, 30.1MB)
  테스트 2 〉	통과 (0.22ms, 30.1MB)
  테스트 3 〉	통과 (0.20ms, 29.9MB)
  테스트 4 〉	통과 (0.19ms, 30.2MB)
  테스트 5 〉	통과 (1.09ms, 30MB)
  테스트 6 〉	통과 (0.17ms, 30.1MB)
  테스트 7 〉	통과 (0.21ms, 30.3MB)
  테스트 8 〉	통과 (0.20ms, 30MB)
  테스트 9 〉	통과 (0.22ms, 30.2MB)
  테스트 10 〉 통과 (0.22ms, 29.8MB)
  테스트 11 〉 통과 (0.19ms, 30.1MB)
  테스트 12 〉 통과 (0.19ms, 30.1MB)
  */
