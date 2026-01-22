import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router';
import { getContactById } from '../../Services/ContactService';
import MessageContent from '../../Components/MessageContent/MessageContent';
import { ContactDetailContext } from '../../Context/ContactDetailContext';
import { ContactContext } from '../../Context/ContactContext';
import './ContactDetailScreen.css';

export default function ContactDetailScreen() {

    const {contact_id} = useParams();
    const {contactSelected} = useContext(ContactDetailContext);
    const {updateContactById} = useContext(ContactContext);

    console.log('Contacto seleccionado desde contexto ', contactSelected);

    /* 
        Como podriamos obtener el contacto a partir del contact_id?
    */
    useEffect(
        () => {
            if(!contactSelected) return;
            
            const timeout = setTimeout(
                () => {
                    updateContactById(
                        {...contactSelected, contact_name: 'Ratatuille'},
                        contactSelected.contact_id
                    )
                },
                3000
            )
            
            return () => clearTimeout(timeout)
        },
        [contact_id]
    )
    
    if (!contactSelected) {
        return (
            <div className= "empty-contact-detail">
                <h2>Contacto no Seleccionado</h2>
            </div>
        );
    }

    // A los 3 segundos de ejecutarse el componente quiero que se modifique el nombre del contacto a "Ratatuille"

    console.log(contactSelected);

    /* 
    Crear mensajes en cada contacto (en contactData.js)
    Renderizar la lista de mensajes en un componente llamado MessagesList (No hace falta estilos en esta etapa)
    */
    return (
        <div className='contact-detail-screen-container'>
            <img src={contactSelected.contact_perfil_image} alt={contactSelected.contact_name} width={40}/>
            <h1>{contactSelected.contact_name}</h1>
            {contactSelected && (
                <div>
                        <MessageContent 
                            messages_list={contactSelected.messages} 
                            contact_selected={contactSelected}/>
                </div>
            )}
        </div>
    )
}
