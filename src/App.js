import contactsArr from "./contacts.json";
import './App.css';
import { useState } from "react";

function App() {
  
  let displayFiveArrays = contactsArr.slice(0,5);
  // console.log(displayFiveArrays)
  

  const [contacts, setContacts ]= useState(displayFiveArrays);
  console.log("Hello");

//   const increaseCounter = () => {
//     // setCounter(counter +1); // new state depends on the previous state. Instead of this, we will do a "Functional update"
//     setCounter((prevCounter) => prevCounter + 1); // Functional update (recommended way if the new value depends on the previous one)

// };

  const addRandomContact = () => {
    
    setContacts( (contacts) => {
      
      let index = (Math.floor(Math.random() * (contactsArr.length -1)));
      
      if ((contacts.map((x) => x.id)).includes(contactsArr[index].id)){
        console.log("we have a duplicated")
        return  contacts 
      }
      // contacts.map((x) => x.id) <- This Crates a list of our current contacts (ID ONLY)
      //.includes() <- This checks if the aforementioned list has something in it
      // contactAre[index].id <- This gets the contact's id of the contact we are consicdering adding
      let contactsCopy = contacts.map((x) => x);
      contactsCopy.push(contactsArr[index])
      return contactsCopy
      
    })
};

const SortByPopularity = () => {

}

const SortByName = () => {

  setContacts( (sort) => {
  contactsArr.sort(function(a, b) {
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;

  })
})
}
    
  return (
    <div className="App"> 
    <h1>IronContacts</h1>

    <button onClick={addRandomContact} >Add Random Contact</button>
    <button onClick={SortByPopularity} >Sort by Popularity</button>
    <button onClick={SortByName} >Sort by name</button>
    
    <table className="center">
    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
    
  </tr>
       {contacts.map((contact) => 
       <tr>
         <td> <img  class="pic" src= {contact.pictureUrl} alt="no pic"></img></td>
         <td> {contact.name} </td>
         <td>  {contact.popularity}</td>
         <td>  
         {contact.wonOscar
          ? <img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f3c6@2x.png" alt="" />
          : <img src="" alt="" />}
         </td>
         <td>  
         {contact.wonEmmy
          ? <img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f3c6@2x.png" alt="" />
          : <img src="" alt="" />}
          </td>
         </tr>
       )}
  </table>
     </div>
  );
}

export default App;
