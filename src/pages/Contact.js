import { useState } from "react";

import Button from "../components/UI/Button/Button";

import classes from "./Contact.module.scss";

const ContactPage = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }
  };

  const nameEmailClassNames = !enteredNameIsValid
    ? classes.nameEmailInput + " " + classes.invalid
    : classes.nameEmailInput;

  return (
    <div className={classes.contact}>
      <h1>Contact Me</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.InputContainer}>
          <div className={nameEmailClassNames}>
            <input
              placeholder="Name"
              onChange={nameInputChangeHandler}
              value={enteredName}
            />
            <input placeholder="Email" />
          </div>
          <div className={classes.subjMessageInput}>
            <input placeholder="Subject" />
            <textarea placeholder="Message" />
          </div>
          <div className={classes.formControl}>
            <Button>Send</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
