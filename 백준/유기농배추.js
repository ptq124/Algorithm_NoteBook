/*
1012
*/

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()
input = input.split('\n')

const T = +input.shift()

function solution(m, n, maps) {
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  )
  let dx = [0, 0, 1, -1]
  let dy = [1, -1, 0, 0]
  let cnt = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 1) {
        //go bfs
        cnt++
        let que = [[i, j]]
        while (que.length) {
          let [y, x] = que.shift()
          if (maps[y][x] === 0) continue
          visited[y][x] = true
          maps[y][x] = 0
          for (let i = 0; i < 4; i++) {
            let nextx = x + dx[i]
            let nexty = y + dy[i]

            //out of range
            if (nextx < 0 || nexty < 0 || nextx >= m || nexty >= n) continue
            //visited
            if (visited[nexty][nextx]) continue
            //0
            if (!maps[nexty][nextx]) continue

            que.push([nexty, nextx])
          }
        }
      }
    }
  }
  console.log(cnt)
}

for (let i = 0; i < T; i++) {
  const [m, n, k] = input.shift().split(' ').map(Number)
  let graph = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  )
  for (let i = 0; i < k; i++) {
    const [x, y] = input.shift().split(' ').map(Number)
    graph[y][x] = 1
  }
  solution(m, n, graph)
}
