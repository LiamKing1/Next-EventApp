import Link from "next/link";
import styleClass from "./button.module.css";

function Button(props) {
  return (
    <Link href={props.link} className={styleClass.btn} legacyBehavior={false}>
      {props.children}
    </Link>
  );
}

export default Button;
