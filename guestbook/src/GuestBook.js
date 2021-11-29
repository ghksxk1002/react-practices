import React from 'react';
import GuestbookAddForm from './Guestbook-add-form';
import GuestbookList from './GuestbookList'

export default function(){
    return (
        <div className='Guestbook'>
            <h1>방명록</h1>
            <GuestbookAddForm />
            <GuestbookList />
        </div>
    )
}