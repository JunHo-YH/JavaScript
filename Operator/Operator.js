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


// 단항연산자
var value = "7";
console.log(typeof +value); //number로 변환
console.log(typeof Number(value)) //number로 변환

console.log(!!"A");// "", '' : 빈문자열 = false  "A",'a'는 값이므로 true

console.log(1 == "1"); //문자 타입을 숫자 타입으로 변환하여 비교 => true

var value2; // undefined
console.log(value2 == undefined); // true

var value3;
console.log(value3 == null); // undefined와 null을 비교하면 true

console.log(1 === "1"); // ===은 값과 타입이 같아야하기 때문에, 값은 같지만 타입이 다르므로 false 반환

var value4;
console.log(value === null); // 타입이 다르므로 false
// 통상적으로 비교하는 코드를 작성할 때는 일치 연산자(===)를 사용한다. 값과 타입까지 비교하기 때문에 안전하다.

// !== : 값 또는 타입이 다르면 true , 일치하면 false