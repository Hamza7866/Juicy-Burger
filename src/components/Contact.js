import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact us</h1>
      <div className="text-container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input type="emil" placeholder="Email" />
          <label htmlFor="textarea">Comments</label>
          <textarea
            name="text"
            cols="50"
            rows="10"
            placeholder="Leave a FeedBack"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
