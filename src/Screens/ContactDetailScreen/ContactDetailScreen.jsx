import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { getContactById } from '../../Services/ContactService';
import MessageContent from '../../Components/MessageContent/MessageContent';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import { ContactContext } from '../../Context/ContactContext';
import './ContactDetailScreen.css';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';

export default function ContactDetailScreen() {

    const {contact_id} = useParams();
    const {contactSelected} = useContext(ContactDetailContext);
    const {updateContactById} = useContext(ContactContext);

    
    if (!contactSelected) {
        return (
            <div className= "empty-contact-detail">
                <h2>Este contacto no tiene WhatsApp, enviale una invitación a unirse</h2>
            </div>
        );
    }

    return (
        
        <div className='contact-open-chat-container'>
            <div className='profile-contact-detail-header'>
                <img src={contactSelected.contact_perfil_image} alt={contactSelected.contact_name} width={40}/>
                <h1>{contactSelected.contact_name}</h1>
            </div>
            <div className='contact-messages-container'>
                {contactSelected && (
                    <div className='messages-list-container'>
                            <MessageContent 
                                messages_list={contactSelected.messages} 
                                contact_selected={contactSelected}/>
                    </div>
                )}
            </div>
            <div className='new-message-form-container'>
                <NewMessageForm />
            </div>
        </div>
        
    )
}
