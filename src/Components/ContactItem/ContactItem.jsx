import React, { useContext } from 'react'
import { Link } from 'react-router';
import './ContactItem.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { getLastMessageByContactId } from '../../Services/ContactService';

export default function ContactItem({contact}) {
    
    const {isDarkMode}= useContext(ThemeContext);

    const {last_message_created_at} = contact;
    console.log(last_message_created_at);

    const lastMessage = getLastMessageByContactId(contact.contact_id);
    console.log(lastMessage);

    return (
                <Link to={`/contact/${contact.contact_id}`} className={'contact-item-link ' + (isDarkMode ? 'dark-mode' : 'light-mode')}>
                    <div className='contact-item-container'>
                        <img src={contact.contact_perfil_image} alt={contact.contact_name} width={75}/>
                        <div className='contact-item-info'>
                            <h3>{contact.contact_name}</h3>
                            <p>{lastMessage ? lastMessage.message_content : 'No messages'}</p>
                        </div>
                    </div>
                </Link>
    )
}
