import { ChevronDown, List, SlidersHorizontal, Table } from "lucide-react";

import { Button } from "@/components/button";
import EventHubNavTabs from "@/app/event-hub/components/event-hub-nav-tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";

export default function EventHubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="px-8 py-4 font-bold text-2xl sticky top-[60px] left-0 bg-background z-20">
        Event Hub
      </h1>
      <div className="flex justify-between py-4 px-8 sticky left-0 top-[124px] bg-background z-20">
        <EventHubNavTabs />
        <div className="flex items-center">
          <Button variant="ghost" className="text-primary mr-1 p-1.5">
            <Table size={20} />
          </Button>
          <Button variant="ghost" className="mr-1 p-1.5">
            <List size={20} />
          </Button>
          <Button variant="ghost" className="mr-6 p-1.5">
            <SlidersHorizontal size={20} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-primary text-primary-foreground"
              >
                Create New <ChevronDown className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Event</DropdownMenuItem>
              <DropdownMenuItem>Template</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="bg-muted min-h-screen">{children}</div>
    </div>
  );
}
