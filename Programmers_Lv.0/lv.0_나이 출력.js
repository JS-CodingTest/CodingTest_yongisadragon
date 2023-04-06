// 문제 설명
// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.

const solution = (age) => 2022 - age + 1;

// 다른 풀이

// function solution(age) {
//   return new Date().getFullYear() - age + 1;
// }

// 확실히 이게 출제자의 의도같다고는 생각했다. Date에 관련된 풀이를 쓰는 김에 저번에 필기해뒀던 내용을 정리한다.
//.getFullYear()는 현재의 년도를 표시.

// 1. Date 객체 생성
// var now = new Date();
// 2. 연도를 가져오는 메서드 .getFullYear()
// console.log(now.getFullYear());
// 3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
// console.log(now.getMonth());
// 4. 일 정보를 가져오는 메서드 .getDate()
// console.log(now.getDate());
// 5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초(ms)로 표시하는 메서드 .getTime()
// console.log(now.getTime());
// 6. 특정 일의 Date 객체 생성
// var christmas = new Date("2020-12-25");
// console.log(christmas);
// 7. 특정 ms의 Date 객체 생성
// var ms = new Date(1000);
// console.log(ms);
