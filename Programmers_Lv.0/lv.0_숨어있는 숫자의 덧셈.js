// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map((el) => parseInt(el))
    .reduce((a, c) => a + c, 0);
}

// 숫자를 찾는다! 수업에서 배운 정규식을 적용한 풀이. 0-9의 숫자에 매치되는 애들을 배열로 반환 -> map이용 다 숫자형으로 바꿔주고, reduce로 전체 합 구해주기 reduce 부분에 직접 parseInt로 map자체를 쓰지 않는 것이 더 좋아 보인다. reduce((a,b) => parseInt(a)+parseInt(b),0)

// 문자를 제거한다! 반대 개념을 적용해서 이렇게 풀 수 있다. 위는 숫자를 탐색하는 정규식이라면, 아래는 [^...]는 ...를 제외하고 찾으라는 의미이므로, replace와 결합하여 숫자가 아닌 값들을 공백, 빼줘라. 라는 의미이다. replace는 배열로 반환해주지 않기 때문에, split('')로 다시 하나하나 배열로 바꿔준뒤, 숫자만 남은 배열 값들을 reduce로 마무리.
// function solution(my_string) {
//   return my_string
//     .replace(/[^0-9]/g, "")
//     .split("")
//     .reduce((acc, curr) => acc + Number(curr), 0);
// }

// 다른 풀이1>
// 해당 풀이는 isNaN을 사용하여 풀었는데,숫자와 문자를 판별할 때 유용할듯 해서 가져왔다. isNaN단독이면 숫자가 아닌값을, !isNaN 숫자가 아닌값을 아니하게되니 숫자를 찾는 용도로 쓴다. 비슷하게 split('')으로 각각 다 쪼갠 배열에 filter로 요소에 각 !isNaN(v)를 해줘서 숫자를 찾아 뽑게했다. 그리곤 reduce.
// function solution(my_string) {
//   return my_string.split("").filter((v)=> !isNaN(v)).reduce((a,b) => parseInt(a)+parseInt(b));
// }

// 이렇게 해도 재밌다. 문자열을 전개 구문하면 split('')한 것과 비슷하게 쓰일 수 있겠다.

// function solution(my_string) {
//   return [...my_string].filter((v)=> !isNaN(v)).reduce((a,b) => parseInt(a)+parseInt(b));
// }
