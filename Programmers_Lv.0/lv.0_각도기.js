// 문제 설명
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180
// 제한사항
// 0 < angle ≤ 180
// angle은 정수입니다.

function solution(angle) {
  let result =
    0 < angle && angle < 90
      ? 1
      : angle === 90
      ? 2
      : 90 < angle && angle < 180
      ? 3
      : 4;
  return result;
}

// 다른 사람 풀이1>
// 제한사항이 0 < angle ≤ 180 이기 때문에 불필요한 범위를 줄여준 삼항 연산자.

// function solution(angle) {
//   return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }

// 다른 사람 풀이2>
// 얼마전 배운 switch를 사용하신 풀이가 있었다. 간결함과는 별개로 범위에 해당하지 않고 특정값에 case를 만든게 재밌었다.

// function solution(angle) {
//   switch(angle) {
//       case 90: return 2;
//       case 180: return 4;
//       default:
//           return 0 < angle && angle < 90 ? 1 : 3;
//   }
// }

// 다른 사람 풀이3>
// 도저히 내 영역으론 생각도하지 못한 미친 풀이.. 한 줄.. 이거맞나요? 조건에 만족하는 요소만 뽑아 새로운 배열로 변환하는 filte함수.
// angle이라는 인자. 차례로 angle에 들어가며 x(배열안의 값)과 비교를 해서 몇개의 값이 그 조건에 맞는지 비교한다. 이를테면 angle이 70이면 70>=x 를 만족하는 x는 0 하나뿐이다. 그럼 그것 하나의 length는 1이므로 1을 리턴해준다. 그리고 90>=x 를 만족하는 건 0과90 두개이므로 두개의 length는2. 90보다 1이라도 많다면 그것을 만족하는 x는 3개가 되므로 3리턴. angle에 180이 들어가면 180>=x는 배열안에서 4개이므로 4개의.length는 4가 리턴된다. 와.
// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }
