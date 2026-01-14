import React, { useContext } from 'react'
import { Link } from 'react-router';
import './ContactItem.css';
import { ThemeContext } from '../../Context/ThemeContext';

export default function ContactItem({contact}) {
    
    const {isDarkMode}= useContext(ThemeContext);

    const {last_message_created_at} = contact;
    console.log(last_message_created_at);
    return (
                <Link to={`/contact/${contact.contact_id}`} className={isDarkMode ? 'dark-mode' : ''}>
                    <div>
                        <img src={contact.contact_perfil_image} alt={contact.contact_name} width={50}/>
                        <h3>{contact.contact_name}</h3>
                        <p>{contact.last_message_content}</p>
                    </div>
                </Link>
    )
}
