// 문제 설명
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ strlist 원소의 길이 ≤ 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

function solution(strlist) {
  return strlist.map((el) => el.length);
}

//(4) [2, 3, 3, 6]
//map으로 각 원소에 length를 처리해 배열로 반환.

//다른 풀이1>
//forEach로 strlist를 순회하며 각 요소의 length를 빈 배열 answer에 push해주는 방식

// function solution(strlist) {
//   var answer = [];
//   strlist.forEach((el) => answer.push(el.length));
//   return answer;
// }

// 다른 풀이2>
// 조건 . ["We", "are", "the", "world!"] -> [2, 3, 3, 6]

// function solution(strlist) {
//   return strlist.reduce((a, b) => [...a, b.length], []);
// }

// 해당 풀이는 스크린샷(배열원소의길이.1,2)으로 설명.
//1. https://github.com/JS-CodingTest/CodingTest_yongisadragon/blob/main/Programmers_Lv.0/%EB%B0%B0%EC%97%B4%EC%9B%90%EC%86%8C%EC%9D%98%EA%B8%B8%EC%9D%B4.1.png
//2. https://github.com/JS-CodingTest/CodingTest_yongisadragon/blob/main/Programmers_Lv.0/%EB%B0%B0%EC%97%B4%EC%9B%90%EC%86%8C%EC%9D%98%EA%B8%B8%EC%9D%B4.2.png
