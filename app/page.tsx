import Photo from "@/lib/modules/HomePage/Photo";
import Socials from "@/lib/modules/HomePage/Socials";
import Stats from "@/lib/modules/HomePage/Stats";

export default function Home() {
  return (
    <div className="h-full py-8">
      <div className="flex xl:flex-row flex-col justify-between items-center xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left xl:order-none order-2">
          <span>Software Developer</span>
          <h1 className="text-6xl mb-6">
            Hello I&apos;m <br />{" "}
            <span className="text-accent">Sandeep Sharma</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            {" "}
            I excel at crafting seamless web experiences and I am proficient
            in various programming languages and technologies.{" "}
          </p>
          <Socials />
        </div>

        <div className="order-none py-4 xl:order-2">
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  );
}
