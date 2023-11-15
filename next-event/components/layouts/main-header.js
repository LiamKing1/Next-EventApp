import Link from "next/link";
import styleClass from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={styleClass.header}>
      <div className={styleClass.logo}>
        <Link href="/"> Next Event </Link>
      </div>
      <nav className={styleClass.navigation}>
        <ul>
          <li>
            <Link href="/event"> Browse All Events </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
