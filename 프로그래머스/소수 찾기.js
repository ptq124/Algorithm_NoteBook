function solution(numbers) {
  var answer = 0
  let arr = []

  for (let i = 1; i <= numbers.length; i++) {
    let result = getArr(numbers, i)
    result = [...new Set(result.join(' ').split(' '))]
    result = result.map((d) => d.split(',').join(''))
    arr.push(...result)
  }

  arr = [...new Set(arr.map(Number))]
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) answer++
  }

  return answer
}

function getArr(arr, n) {
  let visited = Array.from({ length: arr.length }, () => 0)
  let temp = Array(n)
  let result = []
  function dfs(L) {
    if (L === n) {
      result.push([...temp])
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (visited[i] === 0) {
          visited[i] = 1
          temp[L] = arr[i]
          dfs(L + 1)
          visited[i] = 0
        }
      }
    }
  }
  dfs(0)
  return result
}

function isPrime(k) {
  if (k === 1 || k === 0) return false

  for (let i = 2; i <= Math.sqrt(k); i++) {
    if (k % i === 0) return false
  }
  return true
}
