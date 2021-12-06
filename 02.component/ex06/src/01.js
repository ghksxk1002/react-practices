import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// 내가 상태를 바꿀때 조심할것 

// products에 값을 추가할때 이런 식으로 하면 안됨
const updateProducts01 = state.order.products;
updateProducts01.push({
    "no": "s002-001",
    "name": "블루 양말",
    "price": 40000,
    "amount": 3
});

// 원래 state에 있던 내용이 바뀐걸 확인할수 있다 불변성 파괴가 일어났다 이렇게 짜면 안된다
console.log(state.order.products, updateProducts01, state.order.products === updateProducts01);

console.log("=================================================================")

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts02 = state.order.products.concat({
    "no": "s002-001",
    "name": "블루양말",
    "price": 40000,
    "amount": 3
});

console.log(state.order.products, updateProducts02, state.order.products === updateProducts02);

console.log("=================================================================")

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts03 = ([...state.order.products, {
    "no": "s002-001",
    "name": "블루양말",
    "price": 40000,
    "amount": 3
}]);

console.log(state.order.products, updateProducts03, state.order.products === updateProducts03);