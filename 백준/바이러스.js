/*
2667
*/
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()
input = input.split('\n')

const [n] = input[0].split(' ').map(Number)
const [m] = input[1].split(' ').map(Number)

const network = []
for (let i = 2; i <= m + 1; i++) {
  network.push(input[i].split(' ').map(Number))
}

function solution(n, m, network) {
  let graph = Array.from({ length: n + 1 }, () => [])
  let graph1 = []
  for (let i = 1; i <= n; i++) graph1[i] = []

  let visited = Array.from({ length: n + 1 }, () => false)

  for (let i = 0; i < network.length; i++) {
    let [v1, v2] = network[i]
    graph[v1].push(v2)
    graph[v2].push(v1)
  }

  let cnt = 0

  function dfs(v) {
    visited[v] = true
    cnt++
    for (let i = 0; i < graph[v].length; i++) {
      let next = graph[v][i]
      if (!visited[next]) {
        dfs(next)
      }
    }
  }
  dfs(1)
  console.log(cnt - 1)
}
solution(n, m, network)
