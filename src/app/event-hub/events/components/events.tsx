import EventCard from "./event-card";
import { Event } from "../types";

async function getEvents(): Promise<Event[]> {
  const response = await fetch(`https://www.eventogy.com/api/events.json`, {
    method: "GET",
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json().then((data) => data.data);
}

export default async function Events() {
  const events = await getEvents();

  return (
    <div className="flex justify-center px-7">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            imgUrl={`https://picsum.photos/id/${index + 10}/1920/1080`}
          />
        ))}
      </div>
    </div>
  );
}
