import React, { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import { getContactsList } from "../../Services/ContactService";

export default function ContactSideBar() {
    
    /* 
    Comunicar la lista de contactos al ConctactList component
    Renderizar la lista de contactos (No hacen falta estilos en esta etapa)
        Tener en cuenta el cargando
        Tener en cuenta si la lista esta vacia
    */ 

    return (
        <div>
            <ContactList />
        </div>
    )
}
