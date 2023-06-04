// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
    let sum = 0;
    let mul = 1;
    for(const i of num_list){
        sum += i;
        mul *= i;
    }
   return (mul < sum*sum) ? 1:0;
}

//다른 풀이1>
function solution(num_list) {
    let mul = num_list.reduce((a, c) => {return a*c ;}, 1);
    let sum = num_list.reduce((a, c) => {return a+c ;}, 0);
    return (mul < sum*sum) ? 1 : 0;
}

// 하고 같다.

function solution(num_list) {
    let mul = num_list.reduce((a, c) =>  a*c , 1);
    let sum = num_list.reduce((a, c) =>  a+c , 0);
    return (mul < sum*sum) ? 1 : 0;
}



//첫 번째 함수는 reduce() 함수 내부에서 명시적으로 반환문을 사용하여 각 요소의 곱과 합을 계산합니다. 두 번째 함수는 화살표 함수의 축약 표현을 사용하여 reduce() 함수 내부의 반환문을 간략화했습니다. 화살표 함수의 경우 단일 표현식을 가지는 경우에는 중괄호 {}와 return 키워드를 생략할 수 있습니다. 두 함수는 모두 동일한 결과를 반환하며, 어떤 함수를 사용하든 기능상의 차이는 없습니다.