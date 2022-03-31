노마드코더 - 바닐라 JS / 크롬 앱 만들기
======================

📅  2022.03.24 ~ 2022.03.26

⏰ 강의 8시간 / 소요시간 — / 작성시간 2시간

[https://github.com/Gyuri-v/nomad-chrome](https://github.com/Gyuri-v/nomad-chrome)

[바닐라 JS로 크롬 앱 만들기 - 노마드 코더 Nomad Coders](https://nomadcoders.co/javascript-for-beginners)

---

javascript 는 넷스케이프 의 브렌던 아이크가 1995년 12월에 10일만에 만들었다.

인터넷 붐이 일어나면서 새로운 언어를 만들기보다, 기존에 만들어져 있는 Js를 사용하게 됨

Js로 웹사이트의 거의 모든것을 만들 수 있고, 백엔드도 처리가능하다.

---

# 🐥 **기본 내용**

### ****Basic Data Types****

1. number : 숫자 형태
    - integer : 정수 2
    - float 1.5
2. string :  text 형태 
    - “”안에 입력

 

### Variables(변수)

- 띄어쓰기 X
    
    → 띄어쓰기 대신 대문자로 = 카멜케이스(camelCase) 방식 ( →  파이썬은 snake_case )
    
- 새롭게 선언할때만 const 나 let 등을 붙임
    - const : constant 변하지 않는 상수.  (주로 사용)
    - let : 변하는 변수
    - var : var 로 다시 선언해도 적용이 되기 때문에, 기존에 선언한게 있어도 보호되지 않음

### ****Booleans****

- true 또는 false / 데이터 타입
- null : 아무것도 없음 = 비어 있음  / 데이터 타입
- undefined : variables 는  존재하는데 정의되지 않음 /  데이터 타입이 아님
- NaN : 숫자가 아님

### Array(배열)

```jsx
const daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// 값 가져오기
console.log( daysOfweek[5] ); // == sat

// 값 추가
daysOfweek.push("sun"); // -> daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
```

- [ ] 을 사용, 값을 “,” 로 나눠서 정의
- 첫번째 = 0 부터 숫자를 센다.

### Object(객체)

```jsx
const player = {
	name: "nico",
	point: 10,
	fat: true,
}

console.log(player.name); // -> nico. |  player["name"] 으로도 호출 가능

player.name = "gyuri"; // 로 업데이트 가능
player.lastName = "park"; // 없던 항목을 추가
player.point = player.point + 15; // -> 25가 됨 = 업데이트
```

- = 말고 : 사용
- property는 “,” 로 구분

### ****Functions****

계속 반복해서 사용할 수 있는 코드 조각

```jsx
function sayHello(nameOfPerson, age){
	console.log("Hello my name is" + nameOfPerson + " and I'm" + age)
}

sayHello("nico", 10); // -> Hello my name is nico  and i'm 10

const player = {
	name: "nico",
	sayHello: function (otherPersonName) {
		console.log("hello " + otherPersonName + " nice to meet you")
	},
};

player.sayHeollo("gyuri") // -> hello gyuri nice to meet you
```

→ 함수 정의 후, 실행을 꼭 해줘야 함

### Return

함수안에서, return ~~ ; 을 사용하면 function 실행시 해당 값을 출력

- 한번 return 하면 함수가 끝남 → 그 뒤의 내용은 실행 X

```jsx
const age = 55;
function calculateKrAge(ageOfForeigner) {
	ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log( krAge ); 

// -->> undefined 출력

function calculateKrAge(ageOfForeigner) {
	return ageOfForeigner + 2;
}
// 으로 변경시,  --> 57 출력
```

### ****Conditionals (조건문)****

```jsx
const age = parseInt( prompt("how old are you?") );

if( isNaN(age) || age < 0 ) {
	alert("Please write a real positive number");
}else if ( age < 18 ){
	alert("You are too young");
}else if( age >= 18 && age <= 50 ){
	alert("You can drink");
}else if( age > 50 && age <= 80 ){
	alert("You should exercise");
}else if( age > 80 ){
	alert("You can do whatever you want.");
}
```

- && : and operator
- || : or operator

→ 위에서 true 를 가지면, 아래 else 들은 실행 안됨

- 그 외 참고
    - prompt( string 형태의 메세지 입력 ) → 값 입력 / 값 입력 전까지 Js 정지 — 오래된 방법
    - typeof() : 타입 알아보는 명령어
    - parseInt() : string 을 number 로 변경
    - isNaN() : NaN 인지 체크 → boolean 으로 알려줌
    - 함수는 내부에서부터 → 외부로 시작됨
    
    ```jsx
    const age = parseInt( prompt("how old are you?") );
    
    // prompt 실행 -> parseInt 실행
    ```
    

### ****The Document Object****

```jsx
// * 기본 elem
document.body;
document.head;  
document.title;

// * getElementBy~~ [id, class, type 등등]
document.getElementById("title");         // id 값이 title 인 요소를 불러옴
document.getElementsByClassName("title"); // class 값이 title 인 요소들을 불러옴
// -->>> 배열 형태로 불러옴

// * querySelector
document.querySelector(".title h1"); // .title h1 값을 가져옴 - 단 하나의 요소 (첫번째)
document.querySelectorAll(".title"); // .title 값을 가진 모든 요소
// -->>> css 셀럭터 로 불러올수 있음

// * 생성
document.createElement("img"); // elem 생성

// * 기타 참고
.innerText : // 안의 text 를 출력
console.dir(); // log 보다 더 자세한 내용을 보여줌 
```

- 하나의 요소 안에서 querySelector 으로 요소를 찾을 수 도 있다.

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
```

### ****Events****

마우스 이벤트, window 이벤트, interface 이벤트, object 이벤트, clipboard 이벤트, devicemotion 이벤트, error 이벤트 등등 

→ console.dir(요소) 로 console 에 뜬 정보를 확인하면, 그중에 on 으로 시작하는 것으로 이벤트를 찾으면 됨

```jsx
const title = document.querySelector(".title");

// eventListener : event 를 listen 하는것 
title.evnetListener("click", fnc); // title 클릭 하면 fnc 실행
```

```jsx
window.addEventListener(”resize”, fnc);  // 화면이 리사이즈 되면 fnc 실행
window.addEventListener(”copy”, fnc);    // 복사하면 fnc 실행
window.addEventListener("offline", fnc); // 와이파이가 Offline 상태면 fnc 실행
```

[Window - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Window)

### Css in Javascript

→ js 로 class 를 부여 하여, 해당 class 를 가진 요소의 스타일 변경은 css 에서 처리하는게 가장 이상적이긴 함

```jsx
const h1 = document.querySelector(".h1");

function handleTitleClick() {
	const clickedClass = "clicked";
		if( h1.classList.contains(clickedClass) ){
		h1.classList.remove(clickedClass);
	}else{
		h1.classList.add(clickedClass);
	}
	
	// ==
	h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick());
```

- className = “new-class-name” : 해당 요소 class 를 new-class-name 으로 변경
- classList.add(”class-name”) || .remove() || .toggle() : 해당 요소의, class-name 하나만 제어

### Form Events

submit 클릭시, 값은 넘기고 브라우저는 새로고침이 된다.

```jsx
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); // event 의 기본 동작이 되지 않도록 함
  console.log(event);
};

loginForm.addEventListener("submit", onLoginSubmit);
// event submit하면 js는 폼정보를 해당 함수의 첫번째 인자로 Object로 넘긴다.
// -> 때문에 event 로 받아 콘솔 출력 된 것
// 함수에 ()을 붙이면 한번만 실행되고 끝, js에 이름만 주고 실행하는건 js의 몫
```

- string으로만 포함된 변수는 대문자로 표기

```jsx
const HIDDEN_CLASSNAME = "hidden";
```

- string 조합시, [“” + ~~]  와  [`` , ${}] 을 사용하는 방법이 있음

```jsx
greeting.innerText = "Hello " + username;
greeting.innerText = `Hello ${username}`;
```

### localStorage Api

브라우저는 localStorage 에 무언가를 기억하는 기능을 함 

- console에 찍어서 확인 가능
- 개발자도구에서 Application 에서 확인 가능
- 명령어

```jsx
// localStorage.setItem : localStorage 에 무언가를 저장할 수 있음
localStorage.setItem("username", "nico")

// localStorage.getItme : 해당 값을 불러 옴
localStorage.getItem("username"); // -> nico

// localStorage.removeItem : 해당 이름,값 삭제
localStorage.removeItem("username");
```

### setInterval & setTimeout

- setInterval
: 연속적으로 발생

```jsx
function sayHello() {
	console.log("hello");
}

setInterval(sayHello, 5000); // (실행시킬 함수, 몇초간 일어날지);
// -> 5s 간격으로 sayHello 함수 실행
```

- setTimeout
    
    : 일정 시간 뒤에 발생
    

```jsx
function sayHello() {
	console.log("hello");
}

setTimeout(sayHello, 5000); // (실행시킬 함수, 몇초 뒤 일어날지);
// -> 5s  뒤 sayHello 함수 실행
```

### Date object

[Date - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

```jsx
const date = new Date(); // 오늘 날짜를 가져옴

date.getDate();     // 일자 
date.getDay();      // 요일 숫자로 가져옴 0 = 일요일
date.getFullYear(); // 년도
date.getHours();    // 시간
date.getMinutes();  // 분
date.getSeconds();  // 초
```

### padStart()  & padEnd()

string에 사용하는 명령어로, 글자 수 조정시 사용

```jsx
"1".padStart(2, "0"); // => "01"
// -> "1"을 2글자로 만드는데, 2글자가 아니라면 앞에 "0" 을 추가한다

"1".padEnd(2, "0"); // => "10"
// -> "1"을 2글자로 만드는데, 2글자가 아니라면 뒤에 "0" 을 추가한다
```

### Math module

```jsx
// * 랜덤 출력
Math.random(); // 0 - 1 사이의 숫자를 랜덤으로 출력
Math.random() * 10; // 0 - 10 사이의 숫자를 랜덤으로 출력

// * 반올림
Math.round(1.6); // 1 

// * 올림
Math.ceil(1.1); // 1

// * 내림
Math.floor(1.6); // 1
```

### event.targe

함수안에서 event 를 받아와서, 해당 이벤트를 가지고 여러 처리가 가능

- event.target.parentElement : 해당 요소의 부모 요소를 불러옴
- event.target.parentElement.innerText : 해당 부모 요소의 텍스트 가져옴

```jsx
function deleteToDo(event) {
  console.log(event.target.parentElement);
}

button.addEventListener("click", deleteToDo);
```

### JSON.stringfy()

array나 어떤 코드든 string 으로 변경

—> **`JSON.stringify()`**  메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다. 선택적으로,  `replacer` 를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함합니다. _ MDN

```jsx
function save(){
	localStorage.setItem("todos", toDos); 
}
// -> 값 입력해서 넣으면 a,b,c 이런 텍스트 형식으로 저장됨

function save(){
	localStorage.setItem("todos", JSON.stringfy(toDos)); 
}
// -> ["a", "b", "c"] 와 같이 array 형태로 저장됨
```

### JSON.parse()

JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다. 

### array.forEach(element ⇒ {})  ==  array.forEach(fnc)

각각의 아이템에 function 을 실행 시켜줌

```jsx
arr.forEach((item) => console.log('this is the turn of', item));
// ==
function sayHello(item) {
  console.log('this is the turn of', item);
}
arr.forEach(sayHello);
```

### array.filter(elem ⇒ {})

item 하나를 삭제하고 싶으면, 지우고 싶은 item 을 제외하고 새 array 를 만들어야 함 → filter 적용

forEach 와 비슷하게, 앞의 array 의 item 개수만큼 함수가 적용

```jsx
array.filter( fnc );

// fnc 는 true 를 return 해야함. 
// false return 시, item은 사라짐

function sexyFilter(item) {return item !== 3}
[1, 2, 3, 4].filter(sexyFilter) // = [1, 2, 4]
```

### navigator.geolocation.getCurrentPosition();

브라우저가 위치 좌표를 얻어 줌

```jsx
navigator.geolocation.getCurrentPosition(이상 없을때 실행 될 함수 , error발생 시 실행 될 함수);
```

### fetch()

시간이 조금 걸린 뒤 일어남 서버의 응답을 기다리기 위해.

그래서 fetch(url) 하고 .then 으로 response 의 json 을 얻어야 함

→ 그 뒤 data 를 얻음

---

# 🏠 크롬 앱 만들기

### 1. 이름 입력해서 “Hello name” 출력되게 하기
### 2. background image 설정
### 3. 시계 설정
### 4. 명언 랜덤 출력
### 5. todo list
### 6. 날씨정보 가져오기---


# ✏️ 공부 필요

1. JSON.—() 과 같은 json 형식
2. fetch() —
