// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ height ≤ 200
// 1 ≤ array의 원소 ≤ 200

function solution(array, height) {
  const heighterThanMe = (friends) => friends > height;
  const result = array.filter(heighterThanMe).length;
  return result;
}

//또는

function solution(array, height) {
  return (result = array.filter((friends) => friends > height).length);
}

//다른 코드1 >
// for ..of와 삼항연산자를 활용한 코드인데, 읽고보니 좋은 코드같다. for of로 배열을 순회하며 나온 i가 height보다 크다면 answer에 1을 더해주고, 아니라면 그대로 둔다. 큰 사람이 1사람 나올때마다 answer에 1을 더해준다는 것이다. (참고. for in은 인덱스(0,1,2,3,..)을 불러오니까 비교 자체가 안된다. for of는 각 요소의 값(실제 다른 사람들의 키높이 의 값)을 불러옴.)

// function solution(array, height) {
//   let answer = 0
//   for(i of array) i > height ? answer += 1 : answer
//   return answer
// }
