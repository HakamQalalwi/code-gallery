import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new
      </p>

      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" id="email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
        <div className="border animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
