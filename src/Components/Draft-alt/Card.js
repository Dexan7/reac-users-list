import AddUser from "./AddUser";
import UsersLists from "./UsersLists";
import "./Card.css"
import {useState} from "react";
import ErrorModal from "./ErrorModal";

const Card = () => {
  const [users, setUsers] = useState([])
  const [isError, setIsError] = useState(false)


  const addUser = (name, age) => {
    console.log('name1111', name, age)
    console.log('users11', users)
    if (name.length < 1 || age < 1) {
      return setIsError(true);
    }
    // setUsers((prevState) => {
    //     prevState.push(
    //       {
    //         id: Math.random().toString(),
    //         name: name,
    //         age: age
    //       }
    //     )
    //   }
    // )

    setUsers((prevState) =>
      [
        {
          id: Math.random().toString(),
          name: name,
          age: age
        },
        ...prevState, ]
    )
  }

  const closeErrorModal = () => {
    setIsError(false);
  }

  return (
    <div className="card">
      <AddUser onAddUser={addUser} />
      {users.length > 0 && <UsersLists items={users} />}
      {isError && <ErrorModal onClose={closeErrorModal}/>}
    </div>
  )
};

export default Card;