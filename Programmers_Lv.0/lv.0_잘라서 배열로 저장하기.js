// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

function solution(my_str, n) {
  const reg = new RegExp(`.{1,${n}}`, "g");
  return my_str.match(reg);
}
// 정규식을 이용한 풀이.
// n이 6일 때 /.{1,6}/g 과 같다. 1개이상 6개이하, 1 이 없으면 6개인 것들만 보여줌 이 범위를 설정해주는 이유는 n개 씩 짜르다가 뒤에 n가 이하인 열이 남아버리면 그 열까지 포함해주기 위함임. 예를 들어 18개길이의 문자열에서 n이 4로 주어지면 뒤에 2개가 남는데, 그것까지 반환해주기 위해선 최소갯수 1을 설정해준 것임. n은 1이상이라고 조건에 제시되어있음,, '.'은 어느문자든 임의의 한글자를 선택 .{1,4}라면 문자 1개이상 ~4개이하

//다른 풀이1>
//빈 배열을 만들어주고, 인자 n만큼 더해지는 반복문을 순회하며, 빈 배열에 i부터 i+n 까지 자른다. n=4라고 가정하고 i=0 부터 시작이니까 slice(0,4)가 첫번째, slice(4,8)가 두번째, slice(8,12)가 된다..
function solution(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length; i += n) {
    //i는 0부터 시작해서 그 다음은 n=6이라고 그 다음 i=6 아래 slice는 slice(6,12)
    result.push(my_str.slice(i, i + n)); //인덱스는 첫번째가 0이니까 i+n을 해주면 n=6이라고 해도 6개씩 잘린다.
  }
  return result;
}
