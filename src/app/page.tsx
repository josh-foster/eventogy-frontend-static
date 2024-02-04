interface Data {
  scheduled_dates: string[];
  timezone: string;
  location_long: number;
  location_lat: number;
}

interface Event {
  id: string;
  name: string;
  slug: string;
  status: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  data: Data;
}

async function getEvents(): Promise<Event[]> {
  const response = await fetch(`https://www.eventogy.com/api/events.json`, {
    method: "GET",
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json().then((data) => data.data);
}

export default async function Home() {
  const events = await getEvents();

  console.log(events);

  return <div>events</div>;
}
