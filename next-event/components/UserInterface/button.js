import { Link } from "next.link";
import styleClass from "./button.module.css";

function Button(props) {
  return (
    <Link href={props.link}>
      <a className={styleClass.btn}> {props.children} </a>
    </Link>
  );
}

export default Button;
