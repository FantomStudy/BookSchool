import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="compInfo">
          <p>Company Info</p>
          <a href="">About Us</a>
          <a href="">Support</a>
        </div>
        <div className="compContacts">
          <p>Get in touch</p>
          <a href="">
            <p>(480) 555-0103</p> <img src="./public/phone.svg" alt="" />
          </a>
          <a href="">
            <p>debra.holt@example.com</p>
            <img src="./public/mail.svg" alt="" />
          </a>
        </div>
      </footer>
    </>
  );
}
