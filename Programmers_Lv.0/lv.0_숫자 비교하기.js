// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000

// 나의 풀이
function solution(num1, num2) {
  if (num1 == num2) {
    return 1;
  } else {
    return -1;
  }
}

// 다른 풀이 (조건부 연산자)
// function solution(num1, num2) {
//   const answer = num1 === num2 ? 1 : -1;
//   return answer;
// }

// let result = condition ? value1 : value2;
// 조건부 연산자는 위와 같이 사용한다. 평가 대상인 condition이 truthy라면 value1이, 그렇지 않으면(falsy) value2가 반환된다.
// 물음표 연산자는  비교연산자보다 우선순위가 낮으므로 더 나중에 실행된다!
