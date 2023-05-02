// 문제 설명
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < money ≤ 1,000,000

function solution(money) {
  var answer = [];
  let cups = parseInt(money / 5500);
  let rest = money % 5500;
  answer.push(cups, rest);
  return answer;
}

// 몇잔이 나오는지, 얼마가 남는지 따로 변수에 담아서 배열에 푸쉬를 해줬다.

//다른 풀이1>
//배열 자체를 반환하며 값에다가 직접 연산되는 식을 넣어줬다.
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

//다른 풀이2>
//while문을 이용한 풀이인데 신기했다. '나의 돈이 5500원 이상일 때'를 조건으로 잡았다. 얘를 들어서 12000원이 있다고 해보자. 조건을 만족한 첫 번째 싸이클에서 -5500을 거쳐서 카운터에 1잔 적립, 여전히 돈은 6500원이므로 두번째 사이클을 돌 조건이 된다. 하여 -5500이 되면 1000이 된 뒤, 카운터에 또 한잔 적립. 이로써 2잔이라는 count와 나머지 1000이라는 money가 남게된다. while문 바깥에서 리턴 배열에 해당 변수들을 채워줌.
function solution(money) {
  let count = 0;
  while (money >= 5500) {
    money -= 5500;
    count++;
  }
  return [count, money];
}
