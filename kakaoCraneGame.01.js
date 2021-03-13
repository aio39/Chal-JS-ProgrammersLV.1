const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  const bucket = [];
  let line;

  for (let i = 0; i < moves.length; i++) {
    line = moves[i];
    console.log(`${i}번쨰 뽑기를 진행중 입니다 .라인: ${line}`);
    for (let j = 0; j < board.length; j++) {
      const selected = board[j][line - 1];
      if (selected != 0) {
        console.log(`selected 숫자는: ${selected}`);
        bucket.push(selected);
        console.log(`바켓에 ${selected}를 넣습니다.`);
        board[j][line - 1] = 0;
        break;
      }
    }
  }
  console.log(bucket);

  let count = 0;

  (function countFunc() {
    let before = -1;
    let now;
    const length = bucket.length;
    for (let i = 0; i < length; i++) {
      console.log(bucket.length);
      now = bucket[i - count];
      before = bucket[i - count - 1];
      console.log(`before:${before} , now:${now}`);
      if (now == before) {
        bucket.splice(i - count - 1, 2);
        count += 2;
        console.log(`일치해서 삭제함, ${now}`);
      }
      console.log(`i:${i}`);
    }
  })();

  var answer = count;
  console.log(answer);
  return answer;
}

solution();
