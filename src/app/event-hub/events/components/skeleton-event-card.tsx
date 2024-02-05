import { Skeleton } from "../../../../components/skeleton";

export default function SkeletonEventCard() {
  return (
    <div className="flex flex-col m-2">
      <Skeleton className="h-[125px] w-[320px] h-[180px] rounded-xl bg-slate-300" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-[250px] bg-slate-300" />
        <Skeleton className="h-4 w-[200px] bg-slate-300" />
      </div>
      <div className="mt-6 space-y-2">
        <Skeleton className="h-4 w-[100px] bg-slate-300" />
        <Skeleton className="h-8 w-[300px] bg-slate-300" />
      </div>
    </div>
  );
}
