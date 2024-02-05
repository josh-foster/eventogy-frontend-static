import Image from "next/image";
import { MoreHorizontal, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../../../components/dropdown-menu";
import { Event } from "../types";

export default function EventCard({
  event,
  imgUrl,
}: {
  event: Event;
  imgUrl: string;
}) {
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
        <CardTitle className="text-lg line-clamp-1">{event.name}</CardTitle>
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
}
