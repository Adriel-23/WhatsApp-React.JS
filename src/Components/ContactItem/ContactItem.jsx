import React, { useContext } from 'react'
import { Link } from 'react-router';
import './ContactItem.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { formatTimeAgo } from '../../Utils/formatDate'; 

export default function ContactItem({contact}) {
    
    const {isDarkMode}= useContext(ThemeContext);

    const getLastMessageObj = ()=> {
        
        if(contact.messages && contact.messages.length > 0){
            
            return contact.messages[contact.messages.length - 1];
        }
        return null;
    }

    const lastMessage = getLastMessageObj();
    
    const dateToDisplay = lastMessage 
        ? lastMessage.message_created_at
        : contact.last_message_created_at;

    return (
        <Link to={`/contact/${contact.contact_id}`} className={'contact-item-link ' + (isDarkMode ? 'dark-mode' : 'light-mode')}>
            <div className='contact-item-container'>
                <img src={contact.contact_perfil_image} alt={contact.contact_name} width={50}/>
                
                <div className='contact-item-info'>
                    <div className='contact-item-header'>
                        <h3>{contact.contact_name}</h3>
                        
                        <span className='time'>
                            {formatTimeAgo(dateToDisplay)}
                        </span>
                    </div>
                    
                    <div className='message-received'> 
                        <svg className={lastMessage?.send_by_me ? '' : 'hidden'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px">
                            <title>status-dblcheck</title>
                            <path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                        </svg>
                        
                        <p className="last-message">
                            {lastMessage 
                                ? lastMessage.message_content 
                                : 'No hay mensajes aún'}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
