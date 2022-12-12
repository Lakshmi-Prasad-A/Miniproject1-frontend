import React, {Component} from "react";
import ContactService from "../Service/ContactService";


class ViewListofContacts extends Component{
    constructor(){
        super();
        this.state = {
            contacts: [],
            };
    }

    componentDidMount(){
        this.getListofContacts();
    }
    getListofContacts(){
        ContactService.getAllContacts().then((response)=>{
            this.setState({
               contacts:[response.data]
            })
        });
        // setTimeout(()=>{
        //     console.log(this.state.contacts);
        // },1000)
        // console.log("Before time out>>>"+this.state.contacts);
    }


    render(){
        return(
            <>
                <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#"></a>
                    <h3 className="text-center"><br></br></h3>
                </nav>    
                <br></br>
                <h3 className="text-center">PHONE BOOK WEB APPLICATION</h3>
                <table className="table table-hover">
                    <thead >
                        <tr className="bg-info text-white">
                            
                            <th>contactId</th>
                            <th>contactName</th>
                            <th>contactEmail</th>
                            <th>contactNum</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.contacts.map((contact) => {
                       
                    <tr key={contact.contactId}>
                    <td>{contact.contactId}</td>
                    <td>{contact.contactName}</td>
                    <td>{contact.contactEmail}</td>
                    <td>{contact.contactNum}</td>
                    </tr>
                    }

                    )}
                       
                        
                       
                    </tbody>
                </table>

            </>
        )
    }
}
export default ViewListofContacts;