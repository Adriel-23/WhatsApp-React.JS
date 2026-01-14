import React, { useContext } from 'react'
import ContactItem from '../ContactItem/ContactItem.jsx'
import { ContactContext } from '../../Context/ContactContext.jsx';

export default function ContactList() {
    const { contacts, loadingContacts } = useContext(ContactContext);
    if (loadingContacts) {
        return (
            <div>Toy agarrando señal, Carnal</div>
        )
    }
    if (!contacts || contacts.length === 0) {
        return (
            <div>Salí a buscar amigos porque venimos para atras</div>
        )
    }
    return (
        <div>
            {contacts.map(
                contact => {
                    return (
                        <ContactItem
                            contact={contact}
                            key={contact.contact_id}
                        />
                    )
                }
                
            )}
        </div>
    )
}
