'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

const MainContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { theme } = useSelector((state) => state.counterSlice);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert('Please fill all the fields');
      return;
    }
    const recipient = 'shofiyulfuad797@gmail.com';
    const subject = `${name}`;
    const body = `${message}`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setName('');
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col gap-2 p-2"
    >
      {/* <div className="flex gap-2"> */}
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`w-full border rounded-lg p-3 outline-1 outline-slate-300 overflow-auto ${
          theme ? 'bg-white' : 'bg-black'
        }`}
      />
      {/* <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-1/2 border-[3px] rounded-lg p-3 outline-1 overflow-auto outline-slate-300 ${
            theme ? 'bg-white' : 'bg-black'
          }`}
        /> */}
      {/* </div> */}
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        autoComplete="off"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`w-full h-32 rounded-lg p-3 border border-slate-300 overflow-auto outline-1 outline-slate-300 ${
          theme ? 'bg-white' : ' bg-black'
        }`}
      ></textarea>
      <button
        type="submit"
        disabled={isSending}
        className={`py-2 px-5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-200 `}
      >
        {isSending ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};
export default MainContactForm;
