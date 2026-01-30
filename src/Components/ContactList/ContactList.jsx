import React, { useContext, useState } from 'react'
import ContactItem from '../ContactItem/ContactItem.jsx'
import { ContactContext } from '../../Context/ContactContext.jsx';
import './ContactList.css';

export default function ContactList() {
    const { contacts, searchQuery } = useContext(ContactContext);

    const filteredContacts = contacts.filter(contact => {

        const lowerName = contact.contact_name.toLowerCase();

        if (searchQuery && searchQuery.length > 0) {
            return lowerName.includes(searchQuery);
        }
        else {
            if (!contact.is_hidden) {
                return true;
            }
            else if (contact.has_active_chat) {
                return true;
            }
            return false;
        }
    });

    return (
            <div className='contact-list-container'>
                <div className='contacts-list-scroll'>
                    {filteredContacts.map(contact => (
                        <ContactItem
                            key={contact.contact_id}
                            contact={contact}
                        />
                    ))}
                    
                    
                    {filteredContacts.length === 0 && (
                        <p className='no-contacts-found'>
                        No se encontraron contactos
                        </p> 
                    )}
                </div>
            </div>
    )
}
