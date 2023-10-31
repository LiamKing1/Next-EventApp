import EventItem from "./event-item";
import styleClass from './event-list.module.css'

function EventList(props) {
  //  object destructuring
  const { items } = props;
  //  of simply using props.items

  return (
    <ul className={styleClass.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            location={event.location}
            date={event.date}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
