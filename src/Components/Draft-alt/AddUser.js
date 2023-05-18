import "./AddUser.css"
import React, { useState } from "react";

const AddUser = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleAge = (event) => {
    setAge(event.target.value);
  }

  const onSubmit = () => {
    props.onAddUser(name, age)
  }

  return (
    <div className="add-user-card">
      <div className="add-user-card__item">
        <label className="add-user-card__item__label" >Username</label>
        <input type="text" onChange={handleName}/>
      </div>
      <div className="add-user-card__item add-user-card_input">
        <label className="add-user-card__item__label">Age (Years)</label>
        <input type="number" onChange={handleAge}/>
      </div>
      <button className="add-user-card__button" onClick={onSubmit}>Add User</button>
    </div>
  )
};

export default AddUser