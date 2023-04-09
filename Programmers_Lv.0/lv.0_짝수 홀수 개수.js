// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

function solution(num_list) {
  let even = num_list.filter((el) => el % 2 === 0).length;
  let odd = num_list.filter((el) => el % 2).length;
  return [even, odd];
}

// 억지로 써내린 나의 코드..

// 다른 풀이 1>
// 반복문 속에서 만약 num_list의 배열값이 짝수면 answer 배열의 첫번째 배열값[0](짝수)에 +1을, 그렇지 않으면 두번째 배열값[1](홀수)에 +1을 해준다는 내용.

// function solution(num_list) {
//   var answer = [0, 0];

//   for(let i = 0 ; i < num_list.length; i++){
//       if(num_list[i] % 2 == 0) answer[0]++;
//       else answer[1]++;
//   }

//   return answer;
// }

// 다른 풀이 2>
// 오늘도 벽을 느낀 새로운 코드! 기본적으로 answer [0,0]을 셋팅해둔 뒤, num_list을 for of로 순회를 한다. (for of는 배열'값'을 순회한다.) answer[a%2] += 1 의 의미는 answer[0]이면 a%2==0, 즉 짝수라는 말이니까 자동으로 answer[0]+=1을 해주게된다. 반대로 answer[1]이 되는 경우는, a%2의 나머지가 1이라는 말, 즉 홀수라는 말이니까 answer[1]+=1은 홀수에 1점을 주는 것이다. 긴 설명없이 대괄호안의 값이 0혹은1이 나오게만 설정해서, 자동으로 배열의 익덱스 값과 연결되고 일치되게(answer[0]은 짝수자리, answer[1]은 홀수자리)한 것. 감탄!

// function solution(num_list) {
//   var answer = [0,0];

//   for(let a of num_list){
//       answer[a%2] += 1
//   }

//   return answer;
// }
