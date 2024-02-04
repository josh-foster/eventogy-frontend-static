import Image from "next/image";
import eventogyLogo from "../../public/eventogy-logo.svg";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-20">
      <Image priority height={100} src={eventogyLogo} alt="Eventogy Logo" />
      <Link href="/event-hub/events" className="flex mt-6">
        Event Hub <ArrowBigRight />
      </Link>
    </div>
  );
}
