// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000

function solution(numbers) {
  const answer = numbers.map((el) => el * 2);
  return answer;
}

// 배운 내용 중, 배열 메소드 중 map을 떠올렸고, 교안을 보며 차근차근 대입해봤다.
// map은 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 새로운 배열로 반환

// 다른풀이 1. function을 명시하지 않고 화살표 함수로 표시
// const solution = (numbers) => numbers.map((number) => number * 2)

// 다른풀이 2. reduce로 풀이한건데, reduce는 조금 이해가 덜 돼서, 게다가 전개 구문까지.. 차근차근 더 알아 보기로..
// function solution(numbers) {
//   return numbers.reduce((a, b) => [...a, b * 2], []);
// }
