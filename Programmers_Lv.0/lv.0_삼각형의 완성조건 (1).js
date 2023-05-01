// 문제 설명
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// sides의 원소는 자연수입니다.
// sides의 길이는 3입니다.
// 1 ≤ sides의 원소 ≤ 1,000

function solution(sides) {
  const acd = sides.sort((a, b) => b - a);
  return acd[0] < acd[1] + acd[2] ? 1 : 2;
}

//why? 나는 일단 가장 큰 값을 구하기 위해서 내림차순을 만들어볼 생각을 했다. 내림차순을 했으니 배열[0]이 가장 큰 수가 될 것이고, 삼항의 식을 이용해서 풀었다.
//정적 배열(static array)은 크기가 고정되어 있는 배열을 의미한다. 정적 배열이기 때문에 sort를 쓰기 용이하다.

//다른풀이 1>
//Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환한다.
//가장 큰 숫자를 반환해주는 메서드를 알았기 때문에, 배열의 총합-가장 큰 수 = 나머지 두 값의 합(restSUm)이라고 설정해줬고, 그 다음 삼항을 이용한 부분은 같다.
function solution(sides) {
  const max = Math.max(...sides);
  const restSum = sides.reduce((a, b) => a + b, 0) - max;
  return max < restSum ? 1 : 2;
}
