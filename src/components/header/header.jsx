import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <>
      <header>
        <div className="topNav">
          <Image src={"/images/logo.png"} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home{" "}
                </Link>{" "}
                &nbsp;&nbsp;
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
                &nbsp;&nbsp;
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
            </ul>
            <img />
          </nav>
        </div>
        <h1>Algun titulo m,jbnsdf</h1>
      </header>
      <br />
      <br />
    </>
  );
}

export default Header;
