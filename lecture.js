const score = 90;
let grade = '';

// if 문으로 학점을 부여해봅시다.
if (score >= 90) {
  console.log('A');
  grade = 'A';
} else if (score >= 80) {
  console.log('B');
  grade = 'B';
} else {
  console.log('F');
  grade = 'F';
}

// swtich 문으로 학점 점수를 출력해볼까요?
switch (grade) {
  case 'A':
    console.log('4.5');
    break;
  case 'B':
    console.log('3.5');
    break;
  default:
    console.log('재수강');
    break;
}

// 삼항연산자로 장학금 여부를 계산해보아요.
grade === 'A' ? console.log('전액 장학금') : console.log('전액 등록금');

// 반복문으로 1부터 10까지 출력해볼까요?
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while문으로 해봅시다.
let i = 1;
while (i <= 10) {
  console.log(i++);
}

// 증가연산자 구경 한번만 해 볼까요?
let x = 3;
let y = ++x;

x = 3;
let z = x++;

console.log(y, z); // 4, 3

// 배열 (array)
// 빈 배열
let arr = [];
arr = new Array();

arr = [1, '멋사', true]; // 초기값 할당
arr = [, , , ,]; // 길이만 할당 [undefined, undefined, ...]
arr = new Array(4);

const array = [];
array[0] = 1; // [1]
array[array.length] = 2; // [1, 2]
array.push(3); // [1, 2, 3]
array.unshift(0); // [0, 1, 2, 3]

// 배열에서 값 삭제
arr = [0, 1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr.shift()); // 0

arr = [1, 2, 3];
delete arr[0];
console.log(arr); // [undefined, 2, 3]

let fruits = ['사과', '오렌지', '딸기', '배'];
// 배열 자르기
console.log(fruits.slice(1, 3)); // ['오렌지', '딷기']
console.log(fruits); // 그대로!

// 특정 위치 값 삭제
console.log(fruits.splice(1, 2)); // ['오렌지', '딸기']
console.log(fruits); // ['사과', '배']

// 특정 위치를 수정하거나 삽입도 가능!
fruits = ['사과', '오렌지', '딸기', '배'];
fruits.splice(1, 2, '귤', '망고');
fruits.splice(0, 0, '포도');
console.log(fruits);
// ['포도', '사과', '귤', '망고', '배']

// forEach, map
arr = [1, 2, 3, 4, 5];
const double = [];

arr.forEach((num) => {
  double.push(num * 2);
});
console.log(double); // [2, 4, 6, 8, 10]

const triple = arr.map((num) => num * 3);
console.log(triple); // [3, 6, 9, 12, 15]

// for of
for (element of arr) {
  console.log(element);
}

// 정렬
const nums = [3, 2, 0, 4, 11, 29];
nums.sort();
console.log(nums);
// [0, 11, 2, 29, 3, 4]

nums.sort((a, b) => a - b);
console.log(nums);
// [ 0, 2, 3, 4, 11, 29 ]

//함수
// 함수 선언
function hello() {
  return 'Hello';
}

// 함수 표현식 (익명 함수)
const sum = function (a, b) {
  return a + b;
};

// 함수 표현식 : 화살표 함수
const square = (x) => {
  return x * x;
};

// 짧은 구문은 생략 가능
const pow = (base, n) => base ** n;

// 즉시 실행 함수
(function hello() {
  console.log('hi');
})();

(function () {
  console.log('hello');
})();

(() => console.log('world'))();

// 전역 스코프
let firstname = '민정'; // 전역 변수
var myname = '박민정';

if (firstname) {
  // 지역 스코프 : 블럭 스코프
  let message = `Hello ${firstname}`; // 지역변수
  var myname = `김${firstname}`;
  // 블럭 스코프에서 var로 선언 시 전역변수로 선언
  console.log(message);
}

console.log(myname); // 김민정

// console.log(message); // ERROR : 지역변수는 전역스코프에서 접근 불가
console.log(myname); //전역변수로 취급되었기 때문에 "김민정" 출력

function foo() {
  // 지역 스코프 : 함수 스코프
  let fn = 'function'; // 지역변수
  var fnScope = 'function scope';
  // 지역변수 (함수 스코프에서는 var도 지역변수로 선언)
}

// console.log(fn);
// console.log(fnScope);
// 둘다 ERROR, 전역 스코프에서 지역변수 접근 불가

// 익명함수 호이스팅
a();
// b(); // ERROR

// 함수 선언문
function a() {
  console.log('a');
}

// 함수 표현식 : 익명함수
const b = () => console.log('b');

const first = (callback) => {
  callback();
};

const second = () => console.log('여기 콜백이요!');

first(second);

const minjeong = {
  name: '민정',
  age: 24,
  state: '피곤함',
  intro: () => console.log('안녕하세요, 김민정입니다!'),
};

console.log(minjeong.state); // 프로퍼티
minjeong.intro(); // 프로퍼티가 함수 = 메소드

minjeong.major = '소프트웨어'; // 프로퍼티 추가
minjeong['phone'] = 'z-flip3'; // 괄호로도 접근 가능
delete minjeong.state; // 프로퍼티 삭제

// 객체 선언
user = new Object(); // 객체 생성자 문법
user = {}; // 객체 리터럴 문법

console.log('name' in minjeong); // true

for (key in minjeong) {
  console.log(key);
}

// 옵셔널 체이닝
const animals = {
  cat: {
    name: '살구',
  },
  lion: {
    name: '멋쟁이사자처럼',
  },
};

// const dogName = animals.dog.name; // Error
const cowName = animals.cow?.name; // undefined

// 객체 얕은 복사
let aa = { name: 'aa', car: { name: 'sportage', type: 'suv' } };
let bb = aa;

console.log(Object.is(aa, bb)); // true

bb.name = 'bb';
console.log(aa);
// { name: 'bb', car: { name: 'sportage', type: 'suv' } }

// 대표 객체만 깊은 복사
aa = { name: 'aa', car: { name: 'sportage', type: 'suv' } };
bb = Object.assign({}, aa);
bb = { ...aa }; // spread 연산자

console.log(Object.is(aa, bb)); // false
console.log(Object.is(aa.car, bb.car)); // true
bb.name = 'bb';
bb.car.name = 'sorento';
console.log(aa);
// { name: 'aa', car: { name: 'sorento', type: 'suv' } }

// spread 연산자
const colors = ['red', 'blue'];
const newColors = ['black', ...colors];

// 깊은 복사
aa = { name: 'aa', car: { name: 'sportage', type: 'suv' } };
bb = JSON.parse(JSON.stringify(aa));

console.log(Object.is(aa, bb)); // false
console.log(Object.is(aa.car, bb.car)); // false

// 예전의 방식 - 생성자
function Human(name, age) {
  this.name = name;
  this.age = age;
}
Human.prototype.intro = function () {
  console.log(`안녕하세요, ${this.name}입니다!`);
};

const iu = new Human('아이유', 31);
iu.intro();

// 클래스 방식
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    console.log(`안녕하세요, ${this.name}입니다!`);
  }
}

const suzy = new Person('수지', 30);
suzy.intro();

// ts가 권장되는 이유
const multiple = (a, b) => a * b;

console.log(multiple(1, '엥?')); // NaN (Not-a-Number)
