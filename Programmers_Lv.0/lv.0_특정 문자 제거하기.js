// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// letter은 길이가 1인 영문자입니다.
// my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
// 대문자와 소문자를 구분합니다.

function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

// 기본적으로 문자열에서 길이가 1인 문자를 추출하는 것.
// 이를테면 "abcdef".split('a') 를 하면 ['', 'bcdef']로 반환해준다. "abcdef".split('b').join('')까지해주면 'acdef'를 출력해준다. 결과적으로 b(letter)를 뺄 수 있다.

// 다른 풀이1>
//0. 정규식을 이용한 풀이이다. 이 문제를 알기에 앞서서 아래 예제들부터 보자.
function solution(my_string, letter) {
  let reg = new RegExp(letter, "g");
  return my_string.replace(reg, "");
}
//그래서 아래에서 봤듯이 `/${letter}/g` 이를 그대로 정규식으로 사용하면 정규식이 제대로 인식되지 않는다. 정규식 생성자 함수를 이용해서 reg변수에 new RegExp를 할당. letter는 pattern. 찾는값이고 'g'는 g, m, i 등의 플래그 들이다.
// 정규표현식 생성자 함수를 쉽게 풀어쓰면 const regex = new RegExp("hello", "gi"); 는 /hello/gi 과 같다. 즉 reg라는 변수안에 담긴 생성자 함수를 아래 replace 안의 인자로 쓴 것이다. reg에서 찾는 값(reg안에는 letter를 찾는 정규식 기능이 들어있음)을 ""로 비워줘라. 라는 기능을 실행한다.

//1. replace를 이용해서 바꿀 수 있지 않을까? 라는 생각
function solution(my_string, letter) {
  return my_string.replace(letter, "");
}
"BCBdbe".replace("B", ""); //'CBdbe' -> 1개만 바뀜.

//2. 그렇다면 정규 표현식을 일부분 이용하면?
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, ""); //정규표현식 안에 pattern에 문자열 템플릿리터럴을 쓰면 안된다.
}
"BCBdbe".replace(`/${letter}/g`, ""); //에러 뜸. 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다. 참고 /B/g 이런식의 정규표현식에서 //안쪽은 pattern, 바깥쪽은 flags. 여기까지 봤다면 다시 0.번으로 가보자

//다른 풀이2>
// Array.from을 이용해 유사 배열을 제작한 뒤, filter로 letter와 다른 값들을 골라내 배열 만든뒤, 문자열로 반환하기 위해 join으로 합쳐줬다.
function solution(my_string, letter) {
  return Array.from(my_string)
    .filter((t) => t !== letter)
    .join("");
}
