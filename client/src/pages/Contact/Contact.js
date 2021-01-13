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
    const email = e.target.value;
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
      className="bg-gray-300 flex flex-col container md:w-50  shadow-sm"
    >
      <h1 className="my-3 text-center">Contact customer care</h1>
      <div className="my-3">
        <label className="mr-4">
          <b>Name:</b>
        </label>

        <input
          onChange={onChangeName}
          placeholder="Name..."
          className="px-3 py-2 placeholder-gray-400 text-gray-700
 relative bg-white bg-white rounded text-sm outline-none
  focus:outline-none focus:shadow-outline "
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
          className="px-3 py-2 placeholder-gray-400 text-gray-700
       relative bg-white bg-white rounded text-sm outline-none
        focus:outline-none focus:shadow-outline "
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
          className="px-3 py-2 placeholder-gray-400 text-gray-700
       relative bg-white bg-white rounded text-sm outline-none
        focus:outline-none focus:shadow-outline "
        />
      </div>
      <div>
        <input
          type="submit"
          className="p-2 bg-black text-white rounded shadow-sm"
        />
      </div>
    </form>
  );
};

export default Contact;
