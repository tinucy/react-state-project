import React, { useState } from "react"; // importing state to monitor the state of the component

export default function FormExample() {
  const [firstname, setFirstname] = useState(""); //firstname is the state that we define.
  //we set out first state setFirstname, with an initial value of " ".
  //firstname is a variable, setFirstname is a function. Whatever is typed into useState('') reflects in the input of the form
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <p>
        <label>
          First Name:
          <input type="text" name="firstname" value={firstname} />{" "}
          {/*here we are hooking the state (firstname) to the input */}
        </label>
      </p>

      <p>
        <label>
          Last Name:
          <input type="text" name="lastname" value={lastname} />{" "}
        </label>
      </p>

      <p>
        <label>
          First Name:
          <input type="text" name="email" value={email} />{" "}
        </label>
      </p>
    </form>
  );
}
