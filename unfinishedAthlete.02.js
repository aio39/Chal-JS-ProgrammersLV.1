const participant = [
  'mislav',
  'stanko',
  'mislav',
  'ana',
  'mislav',
  'stanko',
  'mislav',
  'ana',
  'mislav',
  'stanko',
  'mislav',
  'ana',
  'mislav',
  'stanko',
  'aiolet',
  'joker',
  'mislav',
  'ana',
];
const completion = [
  'mislav',
  'stanko',
  'mislav',
  'ana',
  'mislav',
  'stanko',
  'mislav',
  'ana',
  'mislav',
  'stanko',
  'aiolet',
  'mislav',
  'ana',
  'mislav',
  'stanko',
  'mislav',
  'ana',
];

function solution(a, b) {
  //   for (let i = 0; i < completion.length; i++) {
  //     const completionName = completion[i];
  //     const index = participant.findIndex((name) => name == completionName);
  //     participant.splice(index, 1);
  //   }

  //   var answer = participant[0];
  // 1번 시도 결과
  //   테스트 1 〉	통과 (0.10ms, 30MB)
  // 테스트 2 〉	통과 (0.08ms, 30.2MB)
  // 테스트 3 〉	통과 (2.99ms, 31.8MB)
  // 테스트 4 〉	통과 (5.75ms, 32MB)
  // 테스트 5 〉	통과 (5.55ms, 31.5MB)

  // for (let i = 0; i < participant.length; i++) {
  //   const parName = participant[i];
  //   const index = completion.findIndex((name) => name == parName);
  //   if (index == -1) return participant[i];
  //   completion.splice(index, 1);
  // }
  // 2번 시도 결과, 속도 일부 개선됨
  // 테스트 1 〉	통과 (0.09ms, 30.2MB)
  // 테스트 2 〉	통과 (0.10ms, 30MB)
  // 테스트 3 〉	통과 (0.95ms, 30.3MB)
  // 테스트 4 〉	통과 (4.76ms, 32MB)
  // 테스트 5 〉	통과 (3.55ms, 32MB)


   # 작성 중 코드 , 작동 안함 
  const split = (arr1, arr2) => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    arr1.sort(); // 알파벳 순으로 정렬
    arr2.sort(); // 알파벳 순으로 정렬
    console.log(`arr: ${arr1}, arr2:${arr2}`);
    for (let i = 0; i < alphabet.length; i++) {
      let indexA1 = arr1.findIndex((name) => name[0] == alphabet[i + 1]);
      let indexB1 = arr2.findIndex((name) => name[0] == alphabet[i + 1]);
      console.log(
        `${alphabet[i]}의 다음 알파벳으로 시작하는 인덱스는 ${indexA1} 그리고 ${indexB1}`
      );
      if (indexA1 != indexB1) {
        // 알파벳 순으로 찾았을때 인덱스가  서로 일치하지 않을 경우 찾기
        console.log('일치하지 않아서 슬라이스 합니다.');
        if ((alphabet[i] = 'a')) {
          const slicedArr1 = arr1.slice(0, indexA1);
          const slicedArr2 = arr1.slice(0, indexA1 - 1);
          return [slicedArr1, slicedArr2];
        } else {
          let indexA2 = arr1.findIndex((name) => name[0] == alphabet[i]);
          // let indexB2 = arr2.findIndex((name) => name[0] == alphabet[i]);
          const slicedArr1 = arr1.slice(indexA2, indexA1);
          const slicedArr2 = arr1.slice(indexA2, indexA1 - 1);
          return [slicedArr1, slicedArr2];
        }
      }
    }
  };

  const findUnfinished = (arr1, arr2) => {
    for (let i = 0; i < arr.length; i++) {
      const parName = arr[i];
      const index = arr2.findIndex((name) => name == parName);
      if (index == -1) return arr[i];
      arr2[index] = 0;
    }
  };

  const slicedArrs = split(participant, completion);
  console.log(slicedArrs);
  const answer = findUnfinished(slicedArrs[0], slicedArrs[1]);

  return answer;
}

answer = solution();
console.log(answer);
