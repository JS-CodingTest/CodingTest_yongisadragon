// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 1,000
// 0 ≤ n ≤ 1,000

function solution(array, n) {
  return array.filter((el) => el === n).length;
}

// 다른 사람 풀이1>
// 정직하지만 이렇게 풀어쓰는게 잘 안된다.
// function solution(array, n) {
//   var answer = 0;
//   for(var i = 0; i < array.length; i++){
//       if(array[i] === n){
//           answer++
//       }
//   }
//   return answer;
// }

// 이렇게 바꿔도 될 듯하다.

// function solution(array, n) {
//   var answer = 0;
//   for(const i of array){
//       if(array[i] === n){
//           answer++
//       }
//   }
//   return answer;
// }
