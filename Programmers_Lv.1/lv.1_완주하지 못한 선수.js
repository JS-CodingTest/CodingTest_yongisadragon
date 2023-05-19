// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
  completion.sort();
  return participant.sort().find((v, i) => v !== completion[i]);
}

//우선, participant는 completion보다 배열 길이가 1이 많다. completion에는 완주 못한 선수가 항상 있기 때문. 다른 것은 괜찮은데, 동명이인이 완주못한 사람 중 하나인 경우를 생각해보자. sort로 인해 알파벳 순서대로 정렬이 되는데, participant에는 동명이인이 있으므로 첫번째 동명이인이 find를 통과하더라도 다음 똑같은 이름에 의해 find로 그 이름이 색출된다. find는 일치하는 조건의 첫번째 값을 반환해줌. return도 그 값을 원하기 때문에 이 문제에 가장 적합한 메서드임.
