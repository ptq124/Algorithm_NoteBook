/*
11724
*/
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()
input = input.trim().split('\n')

const [N, M] = input.shift().split(' ').map(Number)

let dict = {}
for (let i = 1; i <= N; i++) {
  dict[i] = []
}

for (let i of input) {
  const [u, v] = i.split(' ').map(Number)
  dict[u].push(v)
  dict[v].push(u)
}

function solution() {
  answer = 0
  let visited = Array.from({ length: N }, () => false)
  visited[0] = true

  function dfs(k) {
    visited[k] = true

    while (dict[k].length) {
      let cur = dict[k].shift()
      if (visited[cur]) continue
      dfs(cur)
    }
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue
    dfs(i)
    answer++
  }
  console.log(answer)
}

solution()
