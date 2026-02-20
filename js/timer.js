// Timer API = 시간을 다루는 기능
// setTimeOut(함수, 시간(Ms) -> 일정 시간이 지난 다음에 함수를 실행
setTimeout(() => console.log("5초 시간이 만료되었습니다.", 5000));

// const timeOutReturn = setTimeout(() => {
//   return 1000;
// }, 5000);
// console.log(timeOutReturn);

// setInterval(함수, 시간(Ms) -> 일정 시간마다 함수를 반복 실행
//setInterval(() => console.log("1초마다 실행"), 1000);
const timerId = setInterval(() => console.log("1초마다 실행"), 1000);
setTimeout(() => clearInterval(timerId), 5000);
// console.log(timerId);
