import styles from "./Navbar.module.css";
import Logo from "../../images/logo.png";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="Logo" className="hover:scale-100" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li className="text-xl hover:border-b-[0.5rem] hover:scale-110">
            <a href="/#" className="">
              Learn More
            </a>
          </li>
          <li className="text-xl hover:border-b-[0.5rem] hover:scale-110">
            <a href="/#">Log in</a>
          </li>
          <li className="text-xl hover:border-b-[0.5rem] hover:scale-110">
            <a href="/#">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} className="hover:cursor-pointer hover:scale-105"/>
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} className="hover:cursor-pointer hover:scale-105"/>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;
