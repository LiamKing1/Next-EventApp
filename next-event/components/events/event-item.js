import Button from "../UserInterface/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import styleClass from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const localeDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //   seperating and replaceing... incerting a linebreak with \n where there is a ','(comma)
  const addressFormat = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styleClass.item}>
      <img src={"/" + image} alt={title} />
      <div className={styleClass.content}>
        <div className={styleClass.summary}>
          <h2> {title} </h2>
        </div>
        <div className={styleClass.date}>
          <DateIcon />
          <time> {localeDate} </time>
        </div>
        <div className={styleClass.address}>
          <AddressIcon />
          <address> {addressFormat} </address>
        </div>
        <div className={styleClass.actions}>
          <Button link={exploreLink}>
            <span> Explore Event </span>
            <span className={styleClass.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
