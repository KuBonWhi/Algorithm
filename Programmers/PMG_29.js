function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let bridgeSum = 0;
  let truckNum = truck_weights.length;
  const movedTruck = [];
  let nowTruck = truck_weights.shift();

  while (movedTruck.length !== truckNum) {
    if (bridgeSum + nowTruck <= weight) {
      bridge.unshift(nowTruck);
      bridgeSum += nowTruck;
      let bPop = bridge.pop();

      if (bPop !== 0) {
        movedTruck.push(bPop);
        bridgeSum -= bPop;
      }

      nowTruck = truck_weights.shift();
    } else {
      let bPop = bridge.pop();

      if (bPop !== 0) {
        movedTruck.push(bPop);
        bridgeSum -= bPop;
        if (bridgeSum + nowTruck <= weight) {
          bridge.unshift(nowTruck);
          bridgeSum += nowTruck;
          nowTruck = truck_weights.shift();
        } else {
          bridge.unshift(0);
        }
      } else {
        bridge.unshift(0);
      }
    }
    //console.log(bridge);
    time++;
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
