// 문제 설명
// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ order ≤ 1,000,000

function solution(order) {
  let newSet = new Set([3, 6, 9]);
  return order
    .toString()
    .split("")
    .filter((el) => newSet.has(parseInt(el))).length;
}

//이번에도 수업에서 배운 set을 이용. set의 메서드중 has를 사용했는데 주어진 요소를 가지고 있느냐 묻는 메서드이다.
// 순서대로, order는 숫자형으로 주어졌으므로 toString -> 문자열로 변화 (*(''+order)문자열 변환하는데 이렇게도 쓴단다.) -> 문자열을 split('')으로 문자 하나하나 잘라서 배열로 만든 뒤, filter로 포함 요소 중, newSet이 가지고 있는 요소(3,6,9)와 공통된 것이 있는지, 비교 후 그 길이를 리턴. (여기서 parseInt는 앞에서 걸러져온 배열의 요소는 문자열 형태이기 때문.)
// Set 자료구조는 검색 속도가 빠르다는 장점이 있단다.

// 다른 풀이1>
// 비슷한 과정으로 가다가, filter로 각 3또는 6또는 9와 맞는 요소가 있는지 판별해서 길이를 구해준다. 세가지 경우중 하나만 true여도 되기 때문에 ||를 사용.
// function solution(order) {
//   return order
//     .toString()
//     .split("")
//     .filter((v) => v === "3" || v === "6" || v === "9").length;
// }

// 다른 풀이2>
// 비슷한 풀이과정을 갖지만, filter안에서 배열 메서드 includes를 활용해서 ['3', '6', '9']라는 배열에서 직접 공통 요소가 있는지 구하는 코드이다.
// function solution(order) {
//   return order
//     .toString()
//     .split("")
//     .filter((n) => ["3", "6", "9"].includes(n)).length;
// }

//풀이 추가> 정규표현식
function solution(order) {
  return order.toString().replace(/[^369]/g, "").length;
}

//혹은
function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}

//혹은 split 응용, split을 할 대상을 찾고나면 -1 을 해줘야 그 대상의 갯수를 구할 수 있다.
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}
