import "./Header.css";
import { useState } from "react";
import Button from "../Buttons/Button";
import { Link } from "react-scroll";
import {useNavigate} from "react-router-dom";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className="header" id="home">
        <a href="/">
          <img className="headerLogo" src="Logo.svg" alt="" />
        </a>

        <ul
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <Link to="home" smooth={true}>
            <li onClick={() => setOpen(false)}>Home</li>
          </Link>
          <Link to="product" smooth={true}>
            <li onClick={() => setOpen(false)}>Product</li>
          </Link>
          <Link to="review" smooth={true}>
            <li onClick={() => setOpen(false)}>Review</li>
          </Link>
          <Link to="contact" smooth={true}>
            <li onClick={() => setOpen(false)}>Contact</li>
          </Link>
          <div className="mobileAuthBtn">
            <a href="">Log in</a>
            <Link>
              <Button type="fill">Join us</Button>
            </Link>
          </div>
        </ul>

        <div className="headerRight">
          <a href="/registration">Log in</a>
          <Button type="fill" onClick={() => {navigate('/login')}}>Join us</Button>
        </div>

        <button
          className={`burgerBtn ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
