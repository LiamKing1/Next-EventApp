import Link from "next/link";
import Button from "../UserInterface/button";
import styleClass from './event-item.module.css';

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const localeDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
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
          <time> {localeDate} </time>
        </div>
        <div className={styleClass.address}>
          <address> {addressFormat} </address>
        </div>
        <div className={styleClass.action }>
          <button onClick={exploreLink }> Explore Event </button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
