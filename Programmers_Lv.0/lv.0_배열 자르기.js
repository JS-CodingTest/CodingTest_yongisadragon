// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

function solution(numbers, num1, num2) {
  let answer = numbers.slice(num1, num2 + 1);
  return answer;
}

// 다른 풀이 1>
// 특정 범위를 자르는 개념보단,  i를 num1~num2 인덱스 번호를 반복하며 빈배열에 push해준 예. 이를테면 numbers=[1, 2, 3, 4, 5] 이고, num1 이 1, num2 가 3이라면 result.push(numbers[1])~result.push(numbers[3])까지 반복하며 push. 즉 result.push(numbers[1])=2, result.push(numbers[2])=3... 이런식
// function solution(numbers, num1, num2) {
//   var result = [];
//   for(let i =num1; i <= num2; i++){
//       result.push(numbers[i]);
//   }

//   return result;
// }
