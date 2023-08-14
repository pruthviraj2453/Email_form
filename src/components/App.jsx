import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [heading, setHeading] = useState("");
  const [headingEnd, setHeadingEnd] = useState("");
  const [para, setPara] = useState("");

  const [isMouseOver, setMouseOver] = useState(false);

  function handleFirstInput(event) {
    setFname(event.target.value);
  }

  function handleSecondInput(event) {
    setLname(event.target.value);
  }
  function handleThirdInput(event) {
    setEmail(event.target.value);
  }

  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  function handleClick(event) {
    setHeading(fname);
    setHeadingEnd(lname);
    setPara(email);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {heading} {headingEnd}
      </h1>
      <p>{para}</p>
      <form onSubmit={handleClick}>
        <input
          onChange={handleFirstInput}
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={handleSecondInput}
          placeholder="Last Name"
          value={lname}
        />
        <input onChange={handleThirdInput} placeholder="Email" value={email} />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
