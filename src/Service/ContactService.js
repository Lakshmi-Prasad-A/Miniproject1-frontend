import axios from "axios"

const backendUrl="http://localhost:8080/v1/api/contactlist"

 class ContactService {

    getAllContacts(){
        return axios.get(`${backendUrl}/contacts`,Response="js")
    }
}
export default new ContactService();
