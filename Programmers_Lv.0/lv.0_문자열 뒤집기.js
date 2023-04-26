// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
  const result = [];
  const arr2 = my_string.split("");
  for (let i = arr2.length - 1; i >= 0; i--) {
    result.push(arr2[i]);
  }
  return result.join("");
}

//상당히 지저분한 내 풀이.. 하지만 점점 스스로 풀어가는 시간이 늘어감에 뿌듯함을 느낀다. 전체적인 사고과정은 문자열->배열화->순서뒤집기->다시문자열로 였다. 그래서 빈 배열을 만들고, my_string문자열을 1. split('')으로 배열화시켜줌. 2. 반복문인데 첫 시작값이 문자열의 끝 인덱스. 그리고 하나씩 줄여가면서 0이 될 때까지 줄인다. 인덱스는 [0]까지 있으니까. 3. 그리고 문자열을 배열화 한것에 i순서대로(이경우는 최대 인덱스에서 하나씩 줄어드는 인덱스)푸쉬해준다. 그리고 마지막으로 join(''으로)다시 문자열 화 시켜줌. 조인괄호에 ''가 없으면 	"noraj"가 아니라"n,o,r,a,j"로 뜨니까 주의.

//다른 풀이1>
//가장 담백하다. 큰 맥락에서 스플릿, 리버스(이건 처음 알았지만 편한 메소드 같음 배열 순서 뒤집어 주는 것), 그리고 마지막으로 조인. 배열인 상태에서 다 끝냈다. 가장 심플하고 가독성이 좋음.
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

//다른 풀이2>
// 전체 맥락은 같으나 문자열을 전개구문하면 배열로 바꿔준다.
// let x ='asdfadf'
// [...x] -> ['a', 's', 'd', 'f', 'a', 'd', 'f']
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
