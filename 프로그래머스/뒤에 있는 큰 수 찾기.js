/*
lv2
*/
function solution(numbers) {
  var answer = Array.from({ length: numbers.length }, () => -1)
  let stack = []
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i]
    }
    stack.push(i)
  }
  return answer
}
