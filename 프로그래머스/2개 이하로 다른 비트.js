function solution(numbers) {
  var answer = []

  for (let num of numbers) {
    if (num % 2 == 0) {
      answer.push(num + 1)
    } else {
      num = '0' + num.toString(2)
      let t = num.lastIndexOf('0')
      answer.push(parseInt(num.slice(0, t) + '10' + num.slice(t + 2), 2))
    }
  }

  return answer
}
