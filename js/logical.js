// 논리 연산자 : 여러 조건의 조합 (&&, ||)

// && : 둘 다 true 인 경우에만 true
// || : 둘 중 하나만 true 면 true

let isAdult = true;
let hasTicket = false;

let canPass = isAdult && hasTicket;
console.log(canPass);
