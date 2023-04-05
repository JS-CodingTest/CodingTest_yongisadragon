// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

function solution(numbers) {
  const addArr = numbers.reduce((a, c) => a + c, 0);
  const average = addArr / numbers.length;
  return average;
}

// 얼마전 배운 reduce로 배열의 요소를 모두 더해줬다. 그리고 배열의 길이로 나누어줬다.
// 아직 변수명 짓기가 어색하다.

// 다른 사람의 풀이를 보다보니 배열 요소의 합.을 가르키는 변수의 이름은 sum이 되면 좋을 것 같다.

// 다른 사람의 풀이
// 같은 reduce지만 한줄로 풀었다.
// function solution(numbers) {
//   return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
// }
