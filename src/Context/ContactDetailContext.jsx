

import { useContext, createContext } from "react";
import { ContactContext } from "./ContactContext";
import { useParams, Outlet } from "react-router";


export const ContactDetailContext = createContext(
    {
        contactSelected: null
    }
);

export default function ContactDetailContextProvider (){

    const {getContactById, updateContactById} = useContext(ContactContext)



    const {contact_id} = useParams()

    const contactSelected = getContactById(contact_id)

    const contactDetailValue = {
        contactSelected: contactSelected,
        addNewMessage: addNewMessage,
    }
    
    function addNewMessage(new_message_text){
        const new_message = {
                message_id: contactSelected.messages.length + 1,
                message_content: new_message_text,
                message_created_at: new Date(),
                message_status: 'UNSEEN',
                send_by_me: true,
            }
            /* console.log('Nuevo mensaje a agregar', new_message); */
            updateContactById(
                {messages: [...contactSelected.messages, new_message],
                    last_message: new_message
                },
                Number(contact_id)
            )
        }

    return (
        <ContactDetailContext.Provider
            value={contactDetailValue}
        >
            <Outlet />
        </ContactDetailContext.Provider>
    )
}