import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Zap } from "lucide-react";
import { cn } from "cn";
interface FrameProps {
  wrapClassName?: string;
  heading: string;
  src: string;
  description: string;
  items: string[];
}
const Frame = ({
  wrapClassName,
  heading,
  src,
  description,
  items,
}: FrameProps) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 w-full min-h-86.5",
        wrapClassName,
      )}
    >
      {/* Heading - appears first on mobile */}
      <div className="w-full md:hidden">
        <h3 className="h-num text-foreground text-center">{heading}</h3>
      </div>

      {/* Image */}
      <div className="order-2 md:order-1">
        <Image
          src={src}
          alt="LMS Image"
          width={602}
          height={346}
          className="w-149.75 h-94.5 opacity-100 rounded-tl-[33px] rounded-[8px] object-cover"
        />
      </div>
      <div className="order-3 md:order-2 w-full max-w-161.5 space-y-5.25">
        {/* Desktop heading */}
        <h3 className="hidden md:block h-num text-foreground text-left">
          {heading}
        </h3>

        <div className="w-full max-w-161.5 space-y-2.75 md:space-y-4.75 text-accent">
          <p className="h6-normal">{description}</p>
          <div className="flex flex-col px-5.5 md:px-7.5 gap-1.5 md:gap-2.5">
            {items.map((item, index) => (
              <div key={index} className="base flex items-center gap-2">
                <Zap
                  className="fill-primary shrink-0"
                  strokeWidth={0}
                  size={16}
                />
                <span className="h6-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
