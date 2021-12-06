import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrrder1 = state.order;
updateOrrder1.receive = '부산시 동래구 사직동...';

// 불변송 위베
console.log(state.order, updateOrrder1, state.order === updateOrrder1);

console.log("=========================================")

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// 내가 원하는 객체를 하나 복사해 놓고 바꾸고 싶은 값만 바꿔넣으면 불변성을 위배하지 않는다.
// 문제점 : Object.assign은 깊은 복사를 하지 않는다. 
let updateOrrder2 = Object.assign({}, state.order, {
    receive: '부산시 동래구 사직동...'
})

console.log(state.order, updateOrrder2, state.order === updateOrrder2);