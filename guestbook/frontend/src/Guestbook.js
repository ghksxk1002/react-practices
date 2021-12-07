import React, {useState, useEffect, useRef} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    let isFetching = false;
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        // 여기서 자원정리를 하면 된다
        fetchMessages();
    }, []);
    
    
    const notifyMessage = {
        add: async function(message) {
            
            try{
                const reponse = await fetch(`/api`, {
                    method: 'post',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Accept' : 'application/json'
                    },
                    body: JSON.stringify(message)
                })
    
                if(!reponse.ok) {
                    throw new Error(`${response.status} ${response.statusText}`)
                }
    
                const json = await reponse.json();
                
                if(json.result !== 'success'){
                    throw json.message;
                }
            
                setMessages([json.data, ...messages]);
            } catch(err) {
                console.error(err);
            }

        },
        delete: function(no) {
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    const fetchMessages= async () => {
        if(isFetching){
            return
        }

        
        try{
            isFetching = true;
            
            console.log("fetchingg....")

            const startNo = messages.length == 0? 0 : messages[messages.length - 1].no
            const reponse = await fetch(`/api/${startNo}`, {
                method: 'get',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                }
            })

            if(!reponse.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await reponse.json();
            
            if(json.result !== 'success'){
                throw json.message;
            }
            
            console.log(json.data);

            setMessages([...messages, ...json.data]); // 원래있던 messages 배열에 api 에서 던져준 json data를 스프레드해서 추가
            
            isFetching = false;
            

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div
            ref={outterRef} 
            className={styles.ScrollOuter}
            onScroll={(e)=>{
                if(outterRef.current.scollTop+ outterRef.current.clientHeight > innerRef.current.clientHeight){
                    fetchMessages();
                    console.log("fetching!!!")
                }
            }}>
            <div ref={innerRef}>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}