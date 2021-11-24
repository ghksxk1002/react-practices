import React from 'react';

export default function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorial - 특징 1: HTML과의 차이점</p>
            {/**
             *  1. 속성은 Camel Case
             */}
            <input type='text' maxLength='10' />
            {/**
             *  2. Element는 꼭 닫혀야 한다. createElement가 어디까지 만들어야할지 모른다
             *  오류) <br>, <hr>, <input>
             */}
             <br/>
             <hr/>
             <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMTBfMiAg%2FMDAxNjM2NTQ3OTc2Mjkz.vaUOaUhYqDDVOSBC2gJDNtn4ssDS0BLKPVJEys4TUrog.Ffng2YIJ-tONKH-2Hef4IgH-I6_cYG16Hk-axyoD0U8g.JPEG.gnssudpdy%2F20211110_0119141.jpg&type=sc960_832' width='500px'/>
             {/**
              *  3. 속성 이름은 DOM API 기반이다
                    HTML 에서는 <div id='box' class='box'>
                        doxument,getElement('box').className = 'box'
                    JXM 에서는 <div id='box' className=''>
                    
              */}
              <div id='box' className=''>
                   <h1> box입니당 </h1>
              </div>
        </div>
    )
}