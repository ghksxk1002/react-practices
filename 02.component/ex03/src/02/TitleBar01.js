import React, {Component} from 'react';

// status 를 직접 관리
export default class TitelBar01 extends Component {

    // 생성자
    constructor(){
        super(...arguments); // 스프레드 연산다 ... 요거 arguments[0], arguments[1] 이렇게 할필요가 없다
        
        //this.no = 0;

        this.state = {
            no:0
        }

    }

    // 확장 객체 리터럴에서 이렇게 만드는것을 지원한다?
    onClickHandler() {
        this.no++;
        // setState 메소드는 this의 변화를 렌더해준다
        this.setState({
            no: this.state.no + 1
        })
        console.log('TitleBar01 Clicked');
    }

    render() {
        return (
            <h1
                // 이 객체의, onClickHandler 를 호출 하겠다는 말, .bind(this) 이 함수를 내가 부르는것이 아닌
                // DOM이 호출하는 것이기 때문에 미리 그 함수를 바인딩 시켜야한다
                onClick = { this.onClickHandler.bind(this) }   
                style={{cursor: 'pointer'}}>
                ex03 - Funcational Event Handler(Class Component)
                {/* no:${ this.no },  */}
                {`state.no:${this.state.no}`} 
                
            </h1>
        )
    }
}