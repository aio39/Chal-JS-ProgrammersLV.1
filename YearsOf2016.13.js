function solution(a, b) {
  const lastDayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const datOfWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let elapsedDate = -1 + b;
  for (let i = 0; i < a - 1; i++) {
    elapsedDate += lastDayOfMonth[i];
  }
  const changedDayWeekCount = elapsedDate % 7;
  console.log(
    `금요일을 기준으로 요일이 얼마나 바뀌는지: ${changedDayWeekCount}`
  );

  var answer = datOfWeek[changedDayWeekCount];
  return answer;
}

const answer = solution(5, 24);
console.log(`answer:${answer}`);

/*  result
테스트 1 〉	통과 (0.08ms, 30MB)
테스트 2 〉	통과 (0.07ms, 29.9MB)
테스트 3 〉	통과 (0.07ms, 29.9MB)
테스트 4 〉	통과 (0.07ms, 30.2MB)
테스트 5 〉	통과 (0.07ms, 30.2MB)
테스트 6 〉	통과 (0.07ms, 30.2MB)
테스트 7 〉	통과 (0.05ms, 30.3MB)
테스트 8 〉	통과 (0.08ms, 30.1MB)
테스트 9 〉	통과 (0.07ms, 29.9MB)
테스트 10 〉	통과 (0.07ms, 30.1MB)
테스트 11 〉	통과 (0.07ms, 30MB)
테스트 12 〉	통과 (0.07ms, 30.1MB)
테스트 13 〉	통과 (0.08ms, 29.8MB)
테스트 14 〉	통과 (0.07ms, 30MB)
 */
