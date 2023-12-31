import React from "react";
import Contacts from "../contacts";
import Cards from "../cards";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Cards
        name={Contacts[0].name}
        imgURL={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Cards
        name={Contacts[1].name}
        imgURL={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Cards
        name={Contacts[2].name}
        imgURL={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
