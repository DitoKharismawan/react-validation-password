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
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  const showHide = () => {};
  return (
    <div className="App">
      <div className="container">
        <input
          type="password"
          className="password"
          placeholder=" Enter your password"
          onChange={handleInputChange}
        />
        {show ? (
          <FontAwesomeIcon
            icon={faEyeSlash}
            id="show_hide"
            onClick={showHide}
          />
        ) : (
          <FontAwesomeIcon icon={faEye} id="show_hide" onClick={showHide} />
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
