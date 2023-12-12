import Link from "next/link";
import Image from "next/image";
import Styles from "../src/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
        <Link href="/">
          <Image
            src="/images/pokelogo.png"
            width="30"
            height="30"
            alt="Picture of the author"
            className={Styles.logo_img}
          />
        </Link>
        <h1>PokeWeb</h1>
      </div>
      <ul className={Styles.link_content}>
        {/* <li >
          <Link href="/" legacyBehavior><a>Home</a></Link>
        </li> */}
      </ul>
    </nav>
  );
}
