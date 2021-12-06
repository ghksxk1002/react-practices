// Object.assing의 문제점
import fs from 'fs';
import update from 'react-addons-update'; // 불변성을 깨지 않으면서 객체안의 값을 추가할수 있는 라이브러리

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order,{
    receive : {
        $set: '부산시 동래구 사직동' // 값을 변경하는 $set
    },
    payment: {
        method:{
            $set:'모바일'
        }
    },
    products : {
        // 배열 요소 새로 추가
        $push: [{
            "no": "s002-001",
            "name": "스페샬 치킨",
            "price": 2000,
            "amount": 6
            },
            {
            "no": "k002-001",
            "name": "스페셜 치즈 치킨",
            "price": 50000,
            "amount": 3
            }
        ],
        // 배열 요소 변경하기(인덱스로 찾아서)
        0: {
            amount: {
                $set: 5
            }
        }
    }
})


console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment,
    state.order.products === updateOrder.products
    )