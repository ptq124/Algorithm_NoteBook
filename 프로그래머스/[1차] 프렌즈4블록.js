/*
lv 2
*/
function solution(m, n, board) {
  var answer = 0
  board = board.map((d) => d.split(''))

  while (true) {
    //4개 찾기
    let arr = []
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let tmp = [
          board[i][j],
          board[i][j + 1],
          board[i + 1][j],
          board[i + 1][j + 1],
        ]

        if (tmp.join('') === '') continue
        if (tmp.filter((d) => d == board[i][j]).length === 4) {
          arr.push([i, j])
        }
      }
    }
    // 더이상 찾을게 없음 탈출
    if (arr.length === 0) break

    //삭제
    for (let str of arr) {
      const [i, j] = str
      board[i][j] = ''
      board[i][j + 1] = ''
      board[i + 1][j] = ''
      board[i + 1][j + 1] = ''
    }
    //채우기
    for (let i = 0; i < n; i++) {
      let arr = []
      for (let j = 0; j < m; j++) {
        if (board[j][i] == '') continue
        arr.push(board[j][i])
      }
      while (arr.length != m) {
        arr.unshift('')
      }
      for (let k = 0; k < m; k++) {
        board[k][i] = arr[k]
      }
    }
  }
  // 지운 블록 개수 세기
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '') answer++
    }
  }
  return answer
}
