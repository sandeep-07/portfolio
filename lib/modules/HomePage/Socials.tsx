import { Button } from "@/components/ui/button";
import { DownloadIcon, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "Github",
    link: "https://github.com/sandeep-07",
    icon: <Github />,
  },
  {
    namwe: "Linkedin",
    link: "https://www.linkedin.com/in/sandeep-sharma2/",
    icon: <Linkedin />,
  }
];

const Socials = () => {
  return (
    <div className="flex-col flex items-center gap-8 xl:flex-row">
      <Link target="_blank" href={'https://drive.google.com/file/d/1HBLR2QCut_QFPvolmWX4V-BUOjt3yn_j/view?usp=sharing'}>
      <Button
        variant="outline"
        size={"lg"}
        className="rounded-full border-accent text-accent hover:bg-accent  bg-primaary"
      >
        <span>Downoload CV</span>
        <DownloadIcon />
      </Button>
      </Link>

      <div className="flex gap-8 xl:flex-row">
        {socials.map((social) => (
          <Link
            className="hover:bg-accent hover:text-primary hover:transition-all duration-500 border rounded-full p-2 "
            key={social.link}
            href={social.link}
          >
            <p>{social.icon}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
