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
const segmentIconMap: { [key in (typeof SEGMENTS)[number]]: LucideIcon } = {
  events: Calendar,
  templates: LayoutPanelTop,
  archive: Archive,
};

export default function EventHubNavTabs() {
  const segment = useSelectedLayoutSegment();
  const Icon = segmentIconMap[segment ?? "events"];
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
            {SEGMENTS.filter((s) => s !== segment).map((s) => {
              const Icon = segmentIconMap[s ?? "events"];
              return (
                <Link href={`${PARENT_PATH}/${s}`} key={s}>
                  <DropdownMenuItem>
                    <Icon size={20} className="mr-2" />
                    {s ? capitiseFirstLetter(s) : ""}
                  </DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:block">
        {SEGMENTS.map((s) => {
          const Icon = segmentIconMap[s ?? "events"];
          return (
            <Link href={`${PARENT_PATH}/${s}`}>
              <Button
                variant={segment === s ? "default" : "outline"}
                className="rounded-full p-6 mr-2"
              >
                <Icon size={20} className="mr-2" />
                {s ? capitiseFirstLetter(s) : ""}
              </Button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
