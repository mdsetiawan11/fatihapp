import { SiGithub, SiInstagram } from "react-icons/si";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  {
    link: "https://www.instagram.com/md.setiawan11/",
    label: "Instagram",
    Icon: SiInstagram,
  },
  {
    link: "https://github.com/mdsetiawan11",
    label: "GitHub",
    Icon: SiGithub,
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "animate-move-down flex items-center justify-between py-10",
        className,
      )}
    >
      <h1 className="text-6xl font-light text-white">Fatih</h1>

      <div className="hidden items-center gap-5 sm:flex">
        <Button className="rounded-2xl bg-blue-800 text-xl hover:to-blue-800">
          Permintaan Fitur
        </Button>
        <Button className="rounded-2xl bg-blue-800 text-xl hover:to-blue-800">
          Privacy
        </Button>
        <Button className="rounded-2xl bg-blue-800 text-xl hover:to-blue-800">
          FAQs
        </Button>
      </div>
    </nav>
  );
};
