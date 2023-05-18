// import Card from "./Components/Draft-alt/Card";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import {useState} from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/*<Card />*/}
    </div>
  );
}

export default App;
