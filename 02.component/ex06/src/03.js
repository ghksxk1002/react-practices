// Object.assing의 문제점
import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = Object.assign({}, state.order, {
    receive: "부산 광역시"
})

updateOrder.payment.method = "모바일로 계산"

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment // 원래있던 payment를 변경시켜버림 딥 카피가 안됬다는뜻
                                                // 깊은 복사는 비용이 많이듬 따라서 헬퍼 함수를 사용한다 04 예제고 기기   
    )