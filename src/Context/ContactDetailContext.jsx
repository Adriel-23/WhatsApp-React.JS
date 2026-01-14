
/* 
Crear el contexto:
Sera un contexto que trabajara a nivel de ruta
Trabajara sobre <Route path='/contact/:contact_id' element={<ContactDetailContext/>}>
Llamara al contact_id de la url usando useParams
Tendra una VARIABLE interna llamada contact_selected (Guardara el contacto seleccionado) 
Debe proveer:
    - contact_selected
*/
import { useContext, createContext } from "react";
import { ContactContext } from "./ContactContext";
import { useParams, Outlet } from "react-router";

export const ContactDetailContext = createContext(
    {
        contactSelected: null
    }
);

export default function ContactDetailContextProvider (){

    const {getContactById} = useContext(ContactContext)



    //Esto nos permite caputrar parametros de busqueda en la URL
    const {contact_id} = useParams()

    const contactSelected = getContactById(contact_id)

    const contactDetailValue = {
        contactSelected
    }
    return (
        <ContactDetailContext.Provider
            value={contactDetailValue}
        >
            <Outlet />
        </ContactDetailContext.Provider>
    )
}