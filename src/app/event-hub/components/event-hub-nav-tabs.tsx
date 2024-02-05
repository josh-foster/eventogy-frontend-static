"use client";

import Link from "next/link";
import { Calendar, ChevronDown } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";

import { Button } from "../../../components/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/dropdown-menu";
import { capitiseFirstLetter } from "@/utils";

const SEGMENTS = ["events", "templates", "archive"];

export default function EventHubNavTabs() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className=" min-w-32">
              {segment ? capitiseFirstLetter(segment) : ""}
              <ChevronDown className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {SEGMENTS.filter((s) => s !== segment).map((s) => (
              <Link href={`/event-hub/${s}`} key={s}>
                <DropdownMenuItem>
                  {s ? capitiseFirstLetter(s) : ""}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:block">
        {SEGMENTS.map((s) => (
          <Link href={`/event-hub/${s}`}>
            <Button
              variant={segment === s ? "default" : "outline"}
              className="rounded-full p-6 mr-2"
            >
              <Calendar size={20} className="mr-2" />{" "}
              {s ? capitiseFirstLetter(s) : ""}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}
