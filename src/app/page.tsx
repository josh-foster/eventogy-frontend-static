import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";

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

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json().then((data) => data.data);
}

const EventCard = ({ event, imgUrl }: { event: Event; imgUrl: string }) => {
  return (
    <Card className="shadow-lg m-2 w-80">
      <div className="w-full h-2 b bg-primary rounded-tl-md rounded-tr-md" />
      <div className="relative aspect-[1920/1080]">
        <Image
          src={imgUrl}
          alt="Event image"
          fill
          className="object-cover rounded px-3 pt-3"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{event.name}</CardTitle>
        <CardDescription>
          {new Date(event.created_at).toDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <p className="font-bold">London</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Star className="h-4 w-4" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Add to...</DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default async function Home() {
  const events = await getEvents();

  return (
    <div className="flex flex-wrap justify-center bg-muted">
      {events.map((event, index) => (
        <EventCard
          key={event.id}
          event={event}
          imgUrl={`https://picsum.photos/id/${Math.floor(
            Math.random() * 500
          )}/480/270`}
        />
      ))}
    </div>
  );
}
