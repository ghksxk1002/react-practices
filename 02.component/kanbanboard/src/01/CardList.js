import React,{Fragment} from "react";

export default function(key, cards){  
    console.log(key);
    console.log(cards);
    return(
        <Fragment>
        <div className='CardList'>
        <h1 >{key.title}</h1>
            {/* <!-- Begin: Card: 카드들--> */}
            <div className='Card'>
                {key.cards.map((e)=>
                <Fragment>
                    <div className='Card__Title'>{e.title}</div>
                    <div className='Card__Details'>{e.description}</div>
                    {/* <!-- Begin: TaskList: 업무 리스트 --> */}
                    <div className='TaskList'>
                    <ul> 
                        {/* <!-- Begin: TaskList Task: 업무리스트의 업무들 보이기--> */}
                        {e.tasks.map((e, i)=>
                            <li className='TaskList__Task'>
                                <input type='checkbox' checked='' />
                                {e.name}
                                <a href='#' className='TaskList__Task--remove'></a>
                            </li>
                        )}
                        {/* <!-- End: TaskList Task--> */}
                    </ul>
                    </div>
                    {/* <!-- End: TaskList --> */}
                </Fragment>
                )}
            </div>
        </div>
        {/* <!-- End: Card --> */}
        </Fragment>
    )

}