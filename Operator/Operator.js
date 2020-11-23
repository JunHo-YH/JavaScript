var point = 7;
point += 3;
console.log(point)

var two = "2";
var value = 1 + two;
console.log(value)
console.log(typeof value)

var value1 = 1 + 5 + "ABC";
console.log(value1)
console.log("==============");

var value2;
console.log(10 + value2)

console.log(10 + null); // null은 0으로 변환
console.log(10 + true); // true는 1로 변환
console.log(10 + false); // false는 0으로 변환
console.log("=============");

console.log(123 - "23"); // - * / % 는 숫자로 변환해서 연산한다.
console.log(10 * "A"); // A를 숫자로 변환할 수 없으므로 NaN로 출력한다.
console.log("=============");

console.log(2.3 * 3); //6.8999999999999995 => 6.9로 출력되지 않는다. IEEE 754 유동 소수점 처리 때문이다.
console.log(2.3 * 10 * 3 / 10) // 대응방법 : 실수를 정수로 변환하여 값을 구하고, 다시 정수를 실수로 변환한다.
console.log("=============");


// NaN반환
console.log(10 * "N"); 
console.log(0 / 0);

console.log(3/0); // Infinity 반환 : 분모가 0일 때
console.log(0/3); // 분자가 0이면 0반환

