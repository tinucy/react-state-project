import React, { useState } from "react"; // importing state to monitor the state of the component

export default function FormExample() {
  const [firstname, setFirstname] = useState(""); //firstname is the state that we define.
  //we set out first state setFirstname, with an initial/default value of " " e.g useState("")
  //firstname is a variable, setFirstname is a function. Whatever is typed into useState('') reflects in the input of the form
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the entire page from reloading
    console.log(firstname, lastname, email);
    //clear form
    setFirstname("");
    setLastname("");
    setEmail("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          {/*here value={firstname} is hooking the state (firstname) to the input */}
        </label>
      </p>

      <p>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />{" "}
        </label>
      </p>

      <p>
        <label>
          First Name:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </label>
      </p>
      <p>
        <input type="Submit" value="Submit" />
      </p>
    </form>
  );
}
