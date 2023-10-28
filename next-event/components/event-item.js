import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const localeDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

//   seperating and replaceing... incerting a linebreak with \n where there is a ','(comma)
  const addressFormat = location.replace(',', '\n')

  const exploreLink = `/events/${id}`; 

  return (
    <li>
      <img src={'/' + image} alt={title}  />
      <div>
        <div>
          <h2> {title} </h2>
        </div>
        <div>
          <time> {localeDate} </time>
        </div>
        <div>
          <address> {addressFormat} </address>
        </div>
        <div>
          <Link href={exploreLink}> Explore Event </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
