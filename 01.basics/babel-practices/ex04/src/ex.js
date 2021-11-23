
// 블록 스코프 변수(ES6)
const users = [{ // ES6dml const 가 어떻게 변화되나 보자
    no: 1,
    name: "이승현",
    email:"ghksxk1002@naver.com"
}, {
    no: 2,
    name: "이주은",
    email:"lsmdh06013@naver.com"
}];

// 객채분해(ES6)
function print({no, name, email}){
    // 탬플릿 문자열(ES6)
    console.log(`${no}, ${name}, ${email}`)
}

print(users);

// for..or
for(let user of users){
    print(user);
}