function solution(n) {
  //1:00
  var answer = 0
  //1, 1, 2, 3, 5, 8, 13, 21, 34
  let dp = Array.from({ length: n }, () => 0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }

  return dp[n]
}
