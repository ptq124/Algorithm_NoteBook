function solution(numbers) {
  //06:40
  var answer = ''

  answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('')

  return answer[0] == '0' ? '0' : answer
}
