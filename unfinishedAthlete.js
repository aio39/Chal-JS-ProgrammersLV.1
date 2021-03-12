const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

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

  for (let i = 0; i < participant.length; i++) {
    const parName = participant[i];
    const index = completion.findIndex((name) => name == parName);
    if (index == -1) return participant[i];
    completion.splice(index, 1);
  }
  // 2번 시도 결과
  // 테스트 1 〉	통과 (0.09ms, 30.2MB)
  // 테스트 2 〉	통과 (0.10ms, 30MB)
  // 테스트 3 〉	통과 (0.95ms, 30.3MB)
  // 테스트 4 〉	통과 (4.76ms, 32MB)
  // 테스트 5 〉	통과 (3.55ms, 32MB)

  return answer;
}

answer = solution(participant, completion);
console.log(answer);
