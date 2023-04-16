// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100

function solution(numbers) {
  const reverse = numbers.sort((a, b) => b - a);
  const result = reverse[0] * reverse[1];
  return result;
}

// '가장 큰 값 2개'를 어떻게 구하나? -> 내림 혹은 오름 차순을 떠올렸다. sort() 메서드를 떠올렸고, numbers.sort((a,b)=>b-a)는 내림차순, numbers.sort((a,b)=>a-b)는 오름차순을 떠올렸음. 편의에 따라 쓰면 되는데 내림차순으로 새로운 변수 reverse를 만들었고,reverse 에서 0번과 1번 인덱스의 값이 제일 클 것이므로, 이 둘을 곱한 값을 반환했음.

// 다른 풀이1>
// sort()가 원본배열에 영향을 준다는 사실을 잠시 잊었다.. 그냥 numberse에 sort()를 적용하면, numbers의 새롭게 정렬된 배열이 원본 배열을 대체함.그러니까 number배열을 그대로 쓰면됨.
// function solution(numbers) {
//   numbers.sort((a,b)=>b-a);
//   return numbers[0]*numbers[1];
// }

// 만약 원본 배열을 변경하지 않고 정렬된 새로운 배열을 얻고 싶다면, slice() 메소드를 사용하여 복사본을 만들고, 이를 정렬하면 됨.

// const numbers = [3, 1, 4, 2, 5];
// const sortedNumbers = numbers.slice().sort(function(a, b) {
//   return a - b;
// });
// console.log(sortedNumbers); // [1, 2, 3, 4, 5]
// console.log(numbers); // [3, 1, 4, 2, 5]
