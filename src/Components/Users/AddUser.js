import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"
import {useState, useRef} from "react";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0)  {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    setEnteredUsername('');
    ageInputRef.current.value = '';
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">
            Username
          </label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
          <label htmlFor="age">
            Age (years)
          </label>
          <input ref={ageInputRef} id="age" type="number" />
          <Button type="submit">
            Add user
          </Button>
        </form>
      </Card>
    </Wrapper>
  )
};

export default AddUser;