import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext';

export default function MessageContent() {

    const {contactSelected} = useContext(ContactDetailContext);

    if (!contactSelected.messages.length === 0) {
        return (
            <div>No hay mensajes para mostrar.</div>
        );
    }

    return (
        <div>
            {contactSelected.messages.map((message) => (
                <div key={message.message_id}>
                    <span>{new Date(message.message_created_at).toLocaleTimeString()}</span><br /><br />
                    <p>{message.message_content}</p>
                </div>
            ))}
        </div>
    )
    
}
