import SkeletonEventCard from "@/app/event-hub/events/components/skeleton-event-card";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-screen-2xl">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonEventCard key={i} />
        ))}
      </div>
    </div>
  );
}