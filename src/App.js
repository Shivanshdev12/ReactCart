import React,{Component} from 'react';
import ListContacts from './utils/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './utils/CreateContact';

class App extends Component{
  state={
    screen:'list',
    contacts: []
  }
  componentDidMount(){
    ContactsAPI.getAll().then((contacts)=>{
      this.setState({ contacts })
    })
  }
  removeContact=(contact)=>
  {
    this.setState((state)=>({
      contacts:state.contacts.filter((c)=>c.id!==contact.id)
    }));
   
    ContactsAPI.remove(contact);
    console.log(this.state.contacts);
  }

  render(){
    return (
      <div className="app">
        {this.state.screen === 'list' && <ListContacts 
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact} />}
        {this.state.screen === 'create' && (
          <CreateContact/>
        )}
      </div>
    )
  }
}

export default App;
