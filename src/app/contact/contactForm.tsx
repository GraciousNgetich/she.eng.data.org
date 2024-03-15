// ContactForm.tsx
"use client";
import React, { FormEvent } from "react";

const ContactForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "db711b07-bec6-48a1-bf40-f5629958be6f",
        name: (e.currentTarget.name as unknown as HTMLInputElement).value,
        email: (e.currentTarget.email as unknown as HTMLInputElement).value,
        message: (e.currentTarget.message as unknown as HTMLInputElement).value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST" id="contact-form">
      <div className="mb-6">
        <label htmlFor="name" className="form-label">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          className="form-input"
          placeholder="Your Name"
          type="text"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="form-label">
          Working Mail <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          className="form-input"
          placeholder="your.email@email.com"
          type="email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          Anything else? <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="form-input"
          placeholder="Message goes here..."
          rows={8}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
