import Events from "@/app/event-hub/events/components/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventogy - Event Hub - Events",
  description: "",
};

export default async function EventsPage() {
  return (
    <div className="bg-muted">
      <Events />
    </div>
  );
}
