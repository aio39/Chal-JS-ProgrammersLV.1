const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

function solution(a, b) {
  for (let i = 0; i < completion.length; i++) {
    const completionName = completion[i];
    const index = participant.findIndex((name) => name == completionName);
    participant.splice(index, 1);
  }

  var answer = participant[0];

  return answer;
}

answer = solution(participant, completion);
console.log(answer);
