"use client";

import Link from "next/link";
import { Button } from "../../../components/button";
import { Archive, Calendar, LayoutPanelTop } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";

export default function EventHubNavTabs() {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
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
  );
}
