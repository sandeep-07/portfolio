"use client";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
const Stats = () => {
  return (
    <div className="grid grid-cols-2 place-items-center  xl:justify-between py-10  xl:flex-wrap xl:flex  xl:flex-row">
      <StateComponent description="Years of Experience" value={2} />
      <StateComponent description="Projects Completed" value={7} />
      <StateComponent description="Technologies Mastered" value={5} />
      <StateComponent description="Blogs Published" value={3} />
    </div>
  );
};
const StateComponent = ({
  description,
  value,
}: {
  description: string;
  value: number;
}) => {
  return (
    <div className="flex  leading-6 flex-wrap items-start  text-white p-2 rounded-lg">
      <CountUp
        end={value}
        duration={5}
        delay={2}
        className="text-2xl xl:text-5xl font-bold mr-4"
      />
      <span
        className={cn(
          " leading-snug text-white/80 break-words",
          description.length < 15 ? "max-w-[100px]" : "max-w-[130px]"
        )}
      >
        {description}
      </span>
    </div>
  );
};
export default Stats;
