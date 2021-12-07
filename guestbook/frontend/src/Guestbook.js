import React, {useState, useEffect} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        // 여기서 자원정리를 하면 된다
        fetchMessages();
    }, []);
    
    
    const notifyMessage = {
        add: function(message) {
            console.log('ajax posting.....');
            // 성공했다 가정
            message.no = 10;
            message.password = '';

            setMessages([message, ...messages]);
        },
        delete: function(no) {
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    const fetchMessages= async () => {
        try{
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
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}