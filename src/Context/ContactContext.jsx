import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactsList } from "../Services/ContactService";
import LoadingScreen from "../Screens/LoadingScreen/Loadingscreen";

export const ContactContext = createContext();

export default function ContactContextProvider() {

    const [contacts, setContacts] = useState(null)
    const [loadingContacts, setLoadingContacts] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    function loadContacts (){
        setLoadingContacts(true)
        setTimeout(
            function (){
                const contacts_list_response = getContactsList()
                setContacts(contacts_list_response)
                setLoadingContacts(false)
            },
            2500
        )
    }

    function getContactById(contact_id){
        if(!contacts || loadingContacts){
            return null
        }
        for(const contact of contacts){
            if(Number(contact.contact_id) === Number(contact_id)){
                return contact
            }
        }
    }

    function updateContactById (
        updated_contact_object, 
        contact_id_to_update 
    ) {
        setContacts(
            (currentContactsList) => {
                const updateContactList = currentContactsList.map(
                    (contact) => {
                        if (Number(contact.contact_id) === Number(contact_id_to_update)) {
                            return {
                                ...contact,
                                ...updated_contact_object,
                                has_active_chat: true
                            }
                        }
                        return contact
                    }
                )
                return updateContactList
            }
        )
    }


    useEffect(
        () => {
            loadContacts()
        },
        []
    )
    /* console.log(
        'Cargando', loadingContacts,
        'Contact list', contacts
    ) */

    const providerValue = {
        contacts,
        loadingContacts,
        loadContacts,
        getContactById,
        updateContactById,
        searchQuery,
        setSearchQuery
    }
    return (
        <ContactContext.Provider 
            value={providerValue}
        >
            {
                loadingContacts 
                ? <LoadingScreen /> 
                : <Outlet />
            }
        </ContactContext.Provider>
    )
}