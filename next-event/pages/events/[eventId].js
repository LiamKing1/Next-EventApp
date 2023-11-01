import { useRouter } from "next/router";

function EventDetialPage() {
  const router = useRouter();

  router.query.eventId;

  return (
    <div>
      <h1> Event Detail </h1>
    </div>
  );
}

export default EventDetialPage;
