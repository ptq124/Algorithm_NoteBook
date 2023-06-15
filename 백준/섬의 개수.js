/*
4963
*/
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()
input = input.trim().split('\n')

for (let i of input) {
  const [w, h] = input.shift().split(' ').map(Number)

  if (i == '0 0') break

  let arr = []
  for (let i = 0; i < h; i++) {
    arr.push(input.shift().split(' ').map(Number))
  }
  solution(w, h, arr)
}

function solution(w, h, maps) {
  let dx = [1, -1, 0, 0, 1, -1, 1, -1]
  let dy = [0, 0, -1, 1, -1, 1, 1, -1]
  let answer = 0
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (maps[i][j] === 1) {
        answer++
        let que = [[i, j]]
        //bfs
        while (que.length) {
          let [x, y] = que.shift()
          if (maps[x][y] == 0) continue
          maps[x][y] = 0

          for (let i = 0; i < 8; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue
            if (maps[ny][nx] == 1) que.push([nx, ny])
          }
        }
      }
    }
  }
  console.log(answer)
}
