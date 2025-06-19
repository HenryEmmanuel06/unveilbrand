import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-12 px-4">
      <h1 className="text-4xl font-bold mb-2 text-center">Let's get started!</h1>
      <p className="mb-8 text-center max-w-xl mx-auto">
        Book your first meeting time with us via filling the form or by chat.<br />
        We look forward to meeting you!
      </p>
      <button className="mb-8 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Whatsapp Chat</button>
      <form className="bg-[#18181B] rounded-lg shadow-lg p-8 w-full max-w-2xl grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name:" className="p-3 rounded bg-neutral-100 text-black" />
          <input type="text" placeholder="Surname:" className="p-3 rounded bg-neutral-100 text-black" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Phone Number" className="p-3 rounded bg-neutral-100 text-black" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-neutral-100 text-black" />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-sm">Your Budget:</label>
          <div className="flex gap-8">
            <label className="flex items-center gap-2">
              <input type="radio" name="budget" className="accent-fuchsia-600"/>
              Tiny Budget
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="budget" className="accent-fuchsia-600" />
              Medium Budget
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="budget" className="accent-fuchsia-600" />
              Premium Budget
            </label>
          </div>
        </div>
        <input type="text" placeholder="Select The Industries You're In" className="p-3 rounded bg-neutral-100 text-black" />
        <textarea placeholder="Message" className="p-3 rounded bg-neutral-100 text-black min-h-[120px]" />
        <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-3 rounded-full transition">
          <span role="img" aria-label="preview">👀</span> Preview Available Products
        </button>
      </form>
    </div>
  );
};

export default ContactPage; 