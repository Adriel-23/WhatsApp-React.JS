import contacts_data from "../Data/ContactsData";

function getContactsList() {
    return contacts_data;
}

function getContactById(contact_id) {
    for (let contact of contacts_data) {
        if (Number(contact.contact_id) === Number(contact_id)) {
            return contact;
        }
    }
}
export { getContactsList, getContactById };