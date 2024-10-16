import { SiGithub, SiInstagram } from "react-icons/si";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "animate-move-down flex items-center justify-between py-10",
        className,
      )}
    >
      <h1 className="text-6xl font-light text-white">
        {" "}
        <Link href={"/"}>Fatih</Link>
      </h1>

      <div className="hidden items-center gap-5 sm:flex">
        <Button className="rounded-full bg-blue-700 text-xl hover:to-blue-800">
          Lapor Bug
        </Button>
        <Button className="rounded-full bg-blue-700 text-xl hover:to-blue-800">
          Permintaan Fitur
        </Button>
        <Button className="rounded-full bg-blue-700 text-xl hover:to-blue-800">
          <Link href={"/privacy"}>Privacy</Link>
        </Button>
        <Button className="rounded-full bg-blue-700 text-xl hover:to-blue-800">
          FAQs
        </Button>
      </div>
    </nav>
  );
};
