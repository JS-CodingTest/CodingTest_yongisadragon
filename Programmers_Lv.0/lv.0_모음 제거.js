// 문제 설명
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

//처음시도는 괜찮게 가다가 런타임 에러가 뜬다. 아마 match가 배열로 바꾸는 중간 과정에서 'ae'와 같은 my_string이 있어서 null이 뜨는경우 join을 해도 null이 되는 것 같다. 없으면 빈 문자열이 나오게 해줘야할 필요가 있었다.
// function solution(my_string) {
//   return my_string.match(/[^aeiou]/g).join("");
// }
//그래서 한번 널리시로 걸러주고 조인해줬더니 해결되었다.
function solution(my_string) {
  let one = my_string.match(/[^aeiou]/g) ?? [];
  return one.join("");
}

//replace를 이용해서 aeiou를 포함한 것을 빈문자열로 빼줬다.결과는 문자열로 되는 듯 하다. 해당 문제의 경우는 이 방향이 더 짧게 나오는 듯.
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

//다른 풀이1>
//이 경우도 흥미로웠다. 배열화 해주고, 필터로 배열 중 aeiou아닌것을 포함하는지를 includes를 한뒤 join해줬다. 배열중에 모음이 아닌애들을 includes해주면 t/f로 반환해주고, 만족하는 애들을 filter가 걸러서 배열로 반환해주기때문에, join으로 마무리하면 된다.
// function solution(my_string) {
//   return my_string
//     .split("")
//     .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
//     .join("");
// }
