import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List'
import "./styles.css";

function Contacts () {
    const [contacts,setContacts]=useState([

      {
        fullname:'Ebrar Erdem',
        phone_number:'234222'
      },

      {
        fullname:'Ebru Erdem',
        phone_number:'456456'
      },

      {
        fullname:'Esra Erdem',
        phone_number:'123123'
      }
    ]);
    useEffect(()=>{
console.log(contacts)
    },[contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
    <List contacts={contacts}/>
    <Form addContact={setContacts} contacts={contacts}/>
    </div>
   
  )
}

export default Contacts 