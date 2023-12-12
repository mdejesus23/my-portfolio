import { useRef } from "react";

import emailjs from "@emailjs/browser";

import useUserInput from "../hooks/use-userInput";
import classes from "./ContactForm.module.scss";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = () => {
  const form = useRef();

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInputValue: resetNameValue,
  } = useUserInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInputValue: resetEmailValue,
  } = useUserInput(isEmail);

  const {
    value: enteredSubject,
    isValid: subjectIsValid,
    hasError: subjectInputHasError,
    inputChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    resetInputValue: resetSubjectValue,
  } = useUserInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    inputChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetInputValue: resetMessageValue,
  } = useUserInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_zyb8zuy",
        "template_qvsilol",
        form.current,
        "FG1leMBGFx4I46VAK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message successfully sent");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again");
        }
      );

    resetNameValue();
    resetEmailValue();
    resetSubjectValue();
    resetMessageValue();
  };

  // toggle className to add invalid to indicate to the user using some styles that
  // the input value is invalid.
  const nameClasses = nameInputHasError
    ? classes.row + " " + classes.invalid
    : classes.row;

  const emailClasses = emailInputHasError
    ? classes.row + " " + classes.invalid
    : classes.row;

  const subjectClasses = subjectInputHasError
    ? classes.row + " " + classes.invalid
    : classes.row;

  const messageClassname = messageInputHasError ? classes.messageInvalid : "";

  return (
    <>
      <div className={classes.heading}>
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for inquiries or job interview invitations. I'm
          eager to discuss how my skills as a developer can make a meaningful
          contribution to your project. Don't hesitate to drop me a message—I
          look forward to connecting with you!📧
        </p>
        <div className={classes.contact}>
          <form ref={form} onSubmit={formSubmitHandler}>
            <div className={nameClasses}>
              <input
                name="user_name"
                id="name"
                type="text"
                placeholder="Name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
            </div>
            <div className={emailClasses}>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
            </div>
            <div className={subjectClasses}>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                onChange={subjectChangeHandler}
                onBlur={subjectBlurHandler}
                value={enteredSubject}
              />
            </div>
            <div className={classes.row}>
              <textarea
                className={messageClassname}
                name="message"
                placeholder="Message"
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                value={enteredMessage}
              />
            </div>

            <div className={classes.formControl}>
              <button disabled={!formIsValid}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
