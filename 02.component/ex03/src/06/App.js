import React, {Component, useRef} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {

    onScroll() {
        console.log(this.OutterRef.scrollTop, ':', this.OutterRef.clientHeight, ":" , this.innerRef.clientHeight)
    }


    render() {
        return (
            <div
            // outer
            ref={ ref => this.OutterRef = ref }
            className={'App'}
            onScroll={ this.onScroll.bind(this) }> 
                <div
                    // inner
                    ref={ (ref) => this.innerRef = ref }>
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li key={i}>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}