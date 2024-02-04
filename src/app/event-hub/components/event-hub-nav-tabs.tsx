"use client";

import Link from "next/link";
import { Archive, Calendar, ChevronDown, LayoutPanelTop } from "lucide-react";
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
            <Button
              variant="outline"
              className="bg-primary min-w-32 text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            >
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
        <Link href="/event-hub/events">
          <Button
            variant={segment === "events" ? "default" : "outline"}
            className="rounded-full p-6 mr-2"
          >
            <Calendar size={20} className="mr-2" /> Events
          </Button>
        </Link>
        <Link href="/event-hub/templates">
          <Button
            variant={segment === "templates" ? "default" : "outline"}
            className="rounded-full p-6 mr-2"
          >
            <LayoutPanelTop size={20} className="mr-2" />
            Templates
          </Button>
        </Link>
        <Link href="/event-hub/archive">
          <Button
            variant={segment === "archive" ? "default" : "outline"}
            className="rounded-full p-6"
          >
            <Archive size={20} className="mr-2" /> Archive
          </Button>
        </Link>
      </div>
    </>
  );
}
