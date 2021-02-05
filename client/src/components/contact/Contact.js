import React, { useState } from "react";
import { postContact } from "../../services/product";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value
    console.log(email);
    setEmail(email);
  };
  const onChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const handleContact = (e) => {
    e.preventDefault();
    postContact(name, email, message)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });

    //To clear the input string
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleContact}
      className="bg-black flex flex-col container items-center justify-center lg:w-2/4 text-white shadow-sm"
      style={{ width: "340px", height: "485px" }}
    >
      <h2 className="text-5xl font-normal leading-normal mt-0 mb-2
       text-center w-1/2 lg:w-100 text-purple-400">
        Contact us
      </h2>
      <div className="my-3">
        <label className="mr-4">
          <b>Name:</b>
        </label>

        <input
          onChange={onChangeName}
          placeholder="Name..."
          className="border-b bg-black placeholder-white::placeholder text-sm outline-none
          focus:outline-none focus:shadow-outline"
          value={name}
          required
         
        />
      </div>
      <div className="my-3">
        <label className="mr-4">
          <b>Email:</b>
        </label>
        <input
          onChange={onChangeEmail}
          value={email}
          required
          placeholder="Email..."
          className="border-b bg-black placeholder-white::placeholder text-sm outline-none
          focus:outline-none focus:shadow-outline"
        
        />
      </div>

      <div className="my-3">
        <label className="mr-4">
          <b>message</b>
        </label>
        <textarea
          onChange={onChangeMessage}
          value={message}
          required
          className="border-b bg-black text-sm outline-none
          focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          type="submit"
          className="p-2 bg-transparent box-border border-2 border-purple-400 text-purple-500 shadow-sm"
        />
      </div>
    </form>
  );
};

export default Contact;
