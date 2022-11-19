import { useEffect } from "react";
import { useState } from "react";
import useIsMobile from "../customHooks/useIsMobile";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(true);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [name, email, message]);
  return (
    <div className="contact-form">
      <form
        action="https://formsubmit.co/ce070886c0f904faa2b9d64046cd2a21"
        method="POST"
      >
        <input
          name="_redirect"
          type="hidden"
          id="name"
          value="https://twitter.com/?lang=es"
        />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={isMobile ? "4" : "8"}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />
        <div className="btn-grp">
          <input
            type="submit"
            className="btn-submit"
            value="Submit"
            // disabled={isError}
          />
        </div>
      </form>

      {/* <p className="note">PS: You can contact me for resume</p> */}
    </div>
  );
};

export default ContactForm;
