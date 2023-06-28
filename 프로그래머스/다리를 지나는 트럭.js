function solution(bridge_length, weight, truck_weights) {
  var answer = 0
  // 1초마다 감
  //1초마다 트럭이 다리 진입을 시도
  let cnt = 0
  let bridge = []
  let dict = {}
  let tmp = 0
  let tw = truck_weights.length
  let arrive = []
  while (true) {
    cnt++
    //대기트럭 출발
    let truck = truck_weights.shift()

    //다리무게 검사
    let sum = bridge.reduce((a, b) => a + b, 0)
    if (sum + truck > weight) {
      truck_weights.unshift(truck)
      truck = 0
    }

    //다리진입
    if (truck != 0) {
      bridge.push(truck)
      dict[tmp++] = bridge_length
    }

    for (let i in dict) {
      dict[i] -= 1
    }

    //다리 탈출
    for (let i in dict) {
      if (dict[i] == 0) {
        arrive.push(bridge.shift())
        break
      }
    }
    if (arrive.length == tw) break
  }

  answer = cnt + 1
  return answer
}
