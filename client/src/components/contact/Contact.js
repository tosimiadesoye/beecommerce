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
    const email = e.target.value || '';
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
  };


  return (
    <form
      onSubmit={handleContact}
      className="bg-black flex flex-col container  items-center w-50 text-white shadow-sm"
    >
      <h1 className="my-3 text-center">Contact customer care</h1>
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
          className="p-2 bg-purple-400 text-white rounded shadow-sm"
          
        />
      </div>
    </form>
  );
};

export default Contact;
