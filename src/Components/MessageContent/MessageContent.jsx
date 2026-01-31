import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import './MessageContent.css';

export default function MessageContent() {

    const {contactSelected} = useContext(ContactDetailContext);

    if (!contactSelected.messages.length === 0) {
        return (
            <div>No hay mensajes para mostrar.</div>
        );
    }

    return (
        <div className='message-content-container'>
            {contactSelected.messages.map((message) => (
                <div key={message.message_id} className='messages-list-container'>
                    <div  className={'message-bubble '+(message.send_by_me ? 'message-by-me' : 'message-by-contact')}>
                        <div className='message-bubble-content'>
                            <p className='message-content'>{message.message_content}</p>
                            <span className='message-time'>{new Date(message.message_created_at).toLocaleTimeString([], {
                                hour: '2-digit', 
                                minute:'2-digit',
                                hour12: false
                                })}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
    
}
