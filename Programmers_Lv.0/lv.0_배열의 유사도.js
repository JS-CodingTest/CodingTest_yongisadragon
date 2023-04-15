// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ s1, s2의 길이 ≤ 100
// 1 ≤ s1, s2의 원소의 길이 ≤ 10
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.

function solution(s1, s2) {
  const a = new Set(s1);
  const b = new Set(s2);

  const common = [...a].filter((el) => b.has(el));
  return common.length;
}

// set과 has를 사용한 풀이 .. 수업 때 배운내용을 기반으로 풀었다. set이 중복된 값을 허용하지 않으면서 객체 자료형으로 만들어주는데, 이를 다시 배열 메서드 fiter를 적용해서 set의 has 메서드와 혼합해서 사용..

// 다른 풀이1>
// 순수하게 배열 메서드만 써서 풀었다. 이게 가장 깔끔한 풀이같다.. filter안에서 includes 메서드를 다시 적용해서 정보를 걸렀다.
// function solution(s1, s2) {
//   const intersection = s1.filter((x) => s2.includes(x));
//   return intersection.length;
// }

// 다른 풀이2>
// 사실 함수형 프로그래밍 식으로만 풀다보면 정확한 과정을 머릿속으로 그리느라 헷갈릴 때가 많다. 순수하게 for문을 이용해서 각 배열의 길이를 순회했고,그 i 값 중 중복된 값이 있으면 answer 변수에 ++를 해줘서 length를 직접 구했다. 어쩌면 내 수준에 가장 맞다.
function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}

// 이런식으로도..
function solution(s1, s2) {
  let answer = 0;
  for (let i of s1) {
    for (let j of s2) {
      if (i === j) answer++;
    }
  }
  return answer;
}
