// 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 1,000
// 0 ≤ num_list의 원소 ≤ 1,000

function solution(num_list) {
  let result = [];
  for (let i = 1; i <= num_list.length; i++) {
    result.push(num_list[num_list.length - i]);
  }
  return result;
}

//정말 많은 생각을 했다. 우선 새로운 배열을 파고 거기에 배열의 끝 요소부터 더해주면 되겠지. 라는 생각은 했는데 그렇다면 배열의 끝 요소를 어떻게 가져올까. 항상 달라지는 배열 길이에서 배열의 끝 요소를 알기 위해선?.. 이를테면 [1,2,3,4,5]라면 배열의 길이는 5, 배열의 끝 값은 배열length-1.(배열길이5 -1하면 array[4]=5가 될 것 이다.) 자 여기까지 완성 됐으니 배열의 길이만큼 반복문을 돌려주고, 선언된 빈 배열에 push를 해주는데, 그 푸쉬 값은 아까 계산한 끝 값.. num_list[마지막 값의 인덱스 순서]이다. 즉 num_list[num_list.length-i]가 되는 것이다. i는 1부터 시작한다고 했으니, 1,2,3,4,5.. 순서대로 증가하니까 num_list.length-i에서 반대로 깎아주는 i 역할이 될 것이다.

// 다른 풀이1>
// 더 깔끔하게 num_list.length의 값은 j변수에 저장했다.
// function solution(num_list) {
//   let answer = [];
//   let j = num_list.length
//   for(let i = 1; i <= j; i++){
//       answer.push(num_list[j-i])
//   }
//   return answer;
// }

// 다른 풀이2>
// 설마 이게 있을까 했는데. 이런 메서드가 있떠라니..
// function solution(num_list) {
//   return num_list.reverse()
// }

// 다른 풀이3>
// 인덱스 자체를 뒤부터 줄이면서 불러오는 반복문. i의 시작은 num_list.length-1로 랭스-1이 마지막 배열 값의 익덱스이기 때문에 이렇게 설정해주고, i>=0이라고 해준다. 처음엔 i>=1이라고 했는데, 그럼 num_list[1]까지 밖에 안불러옴. [0]까지 불러와야 끝까지 불러오는 것임. 인덱스 남바는0 부터 시작하니까 이거 꼭 주의해주자. 그리고 자연스럽게 빈 배열에 num_list[i]를 푸쉬해주면 된다. 이를테면 [1,2,3,4,5] 일때 i는 num_list[4]=5 ~ num_list[0]=1 까지 순서대로 빈 배열에 푸쉬 해줄 것임.
// function solution(num_list) {
//   let result=[];
//   for(let i=num_list.length-1; i>=0; i--){
//       result.push(num_list[i])
//   }
//   return result;
// }
