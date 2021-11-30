import React from 'react';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
// addtional 추가작업 -> 꼭 필요한건 아님
import {library} from '@fortawesome/fontawesome-svg-core';

import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

export default function() {
    library.add(faBell, fab, far);

    return (
        <div>
            
            
            {/* examples */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />
            {/* solid */}
             {/* 이렇게 할려면 라이브러리를 하나 받아서 추가 작없이 필요하다 */}
            <FontAwesomeIcon icon={["fas","bell"]}/>
            <FontAwesomeIcon icon={["bell"]}/>
            {/* regular */}
            <FontAwesomeIcon icon={["far","bell"]}/>
             {/* BRAND */}
             <FontAwesomeIcon icon={["fab","github"]}/>
             <FontAwesomeIcon icon={["fab","google"]}/>
             <FontAwesomeIcon icon={["fab","facebook"]}/>

           

        </div>
    )
}
