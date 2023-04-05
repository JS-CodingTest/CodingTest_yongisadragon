// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

// 정말 순수한 눈물나는 나의 코드.. '0'부터 매개변수 n이하를 반복하는 i중에.. 2로 나누어지는 i들은 sum에 차곡차곡 쌓아줘. 그리고 sum들을 전부 더해줘.' 를 그대로 썼다.

function solution(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// 다른 사람의 풀이 1> 나랑 비슷해보이지만, 많이 다른..훨씬 간격하고 가독성이 좋다.  i의 시작을 2로 설정하고, 2씩 쌓아주며 짝수만을 반복하는 for문을 생성하고 그 안에서 더했다. 아 젠장 간결해~

// function solution(n) {
//   var answer = 0;

//   for(let i=2 ; i<=n ; i+=2)
//       answer += i;

//   return answer;
// }

// 다른 사람의 풀이 2> 가우스의 덧셈이라는 공식이다. (n/2)*(n/2+1) 나로선 상상 할 수 없는 공식이다.. 이를테면 10이하의 짝수는 2,4,6,8,10이고 더하면 30이다. (half)*(half+1) = (10/2)*(10/2+1) = 30이다. n이 소수가 나오는 경우를 대비해서 Math.floor를 사용했다.

// function solution(n) {
//   var half = Math.floor(n/2);
//   return half*(half+1);
// }
