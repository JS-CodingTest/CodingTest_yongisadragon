// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// array의 길이는 홀수입니다.
// 0 < array의 길이 < 100
// -1,000 < array의 원소 < 1,000

function solution(array) {
  const leng = array.sort((a, b) => b - a).length;
  return array[(leng - 1) / 2];
}

//오름 혹은 내림 차순을 해준 후, 여기서 포인트가 되는 조건은 배열의 길이가 홀수라는 점이라 생각했다. 그래서 곧이곧대로 오름/내림차순된 배열의 길이에서 -1을 해주고 /2를 나눈 인덱스의 값을 리턴했다. 아직 정수가 깔끔하게 나뉘어야 만족하나보다..

//다른 풀이1>
// 메서드를 적용해서 소숫점을 가지는 실수도 정수로 만들어주면된다.
// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }

// 같은 방식으로 진행하다가, 소숫점을 날려서 정수로 만들어준 인덱스를 호출한다. 이를테면 길이가 5인 배열 [-1,-2,3,4,5]이면, 2.5 -> 2가 되어 array[2]이니까 3을 호출한다. 배열의 순서가 [0]부터 시작한다라고 생각하니 이렇게 푸는게 맞는 것 같다.
//이밖에도 parseInt, Math.floor, Math.trunc 등을 쓰더라.
