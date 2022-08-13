import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faTimes,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [show, setShow] = useState(false);

  //if valid
  const valid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = "1";
    text.style.color = "red";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "1";
    valid_icon.style.color = "green";
    text.style.color = "green";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = 0;
    valid_icon.style.color = "green";
    text.style.color = "green";
  };
  //if invalid
  const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);

    text.style.opacity = ".5";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "0";
    valid_icon.style.color = "green";
    text.style.color = "green";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "1";
    invalid_icon.style.color = "red";
    text.style.color = "red";
  };

  //handle input
  const handleInputChange = (e) => {
    const password = e.target.value;

    if (password.match(/[A-Z]/) != null) {
      valid("capital", "fa-checks", "fa-times");
    } else {
      invalid("capital", "fa-checks", "fa-times");
    }
    if (password.match(/[0-9]/) != null) {
      valid("num", "fa-checks", "fa-times");
    } else {
      invalid("num", "fa-checks", "fa-times");
    }
    if (password.match(/[!@#$^&*%]/) != null) {
      valid("char", "fa-checks", "fa-times");
    } else {
      invalid("char", "fa-checks", "fa-times");
    }
    if (password.length > 7) {
      valid("more8", "fa-checks", "fa-times");
    } else {
      invalid("more8", "fa-checks", "fa-times");
    }
  };

  const handleShowhide = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>User Login</h1>
        <label>Email/Username : </label>
        <input
          type={show ? "text" : "email"}
          className="email"
          placeholder="Enter your Email/ Username"
          onChange={handleInputChange}
        />
        <label>Password: </label>
        <input
          type={show ? "text" : "password"}
          className="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        {show ? (
          <FontAwesomeIcon
            onClick={handleShowhide}
            icon={faEye}
            id="show_hide"
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleShowhide}
            icon={faEyeSlash}
            id="show_hide"
          />
        )}
        <p id="capital">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-checks icon" icon={faCheck} />
          <span>Capital Letters</span>
        </p>
        <p id="char">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-checks icon" icon={faCheck} />
          <span>Special Characters</span>
        </p>
        <p id="num">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-checks icon" icon={faCheck} />
          <span>Use Numbers</span>
        </p>
        <p id="more8">
          <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
          <FontAwesomeIcon className="fa-checks icon" icon={faCheck} />
          <span>+8 Characters</span>
        </p>
      </div>
    </div>
  );
}
