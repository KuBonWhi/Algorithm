let defualtTime = 0;
let defualtPay = 0;
let addTime = 0;
let addPay = 0;
const carMap = new Map(); // 0000, [01:12, 05:23]
const chargeMap = new Map(); // 0000, 12500

const payCar = (time) => {
  if (time <= defualtTime) {
    return defualtPay;
  } else {
    return defualtPay + Math.ceil((time - defualtTime) / addTime) * addPay;
  }
};

const hToM = (hour) => {
  let [f, s] = hour.split(":").map((el) => Number(el));
  let sum = 0;

  sum += f * 60;
  sum += s;

  return sum;
};

const solution = (fees, records) => {
  [defualtTime, defualtPay, addTime, addPay] = fees;

  records.forEach((record) => {
    let [time, carNumber, action] = record.split(" ");

    if (action === "IN") {
      carMap.set(carNumber, time);
    } else {
      if (chargeMap.get(carNumber) == undefined) {
        let outTime = carMap.get(carNumber);
        let minus = Math.abs(hToM(outTime) - hToM(time));

        carMap.delete(carNumber);
        chargeMap.set(carNumber, minus);
      } else {
        let outTime = carMap.get(carNumber);
        let minus = Math.abs(hToM(outTime) - hToM(time));
        let beforeCharge = chargeMap.get(carNumber);

        chargeMap.delete(carNumber);
        carMap.delete(carNumber);
        chargeMap.set(carNumber, beforeCharge + minus);
      }
    }
  });

  carMap.forEach((v, k) => {
    let carNumber = k;
    let time = v;
    let minus = Math.abs(hToM("23:59") - hToM(time));

    if (chargeMap.get(carNumber) == undefined) {
      chargeMap.set(carNumber, minus);
    } else {
      let beforeCharge = chargeMap.get(carNumber);

      chargeMap.delete(carNumber);
      chargeMap.set(carNumber, beforeCharge + minus);
    }
  });

  const result = [];
  chargeMap.forEach((v, k) => {
    result.push([k, payCar(v)]);
  });

  result.sort((a, b) => a[0] - b[0]);

  const answer = [];

  result.forEach((el) => {
    answer.push(el[1]);
  });

  return answer;
};

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
