import Image from "next/image";
import { Badge } from "./ui/badge";
import { Zap } from "lucide-react";
import { MDPItems } from "@/data/page";

const MDProgram = () => {
  return (
    <div className="p-6 md:p-16 min-h-211.75 w-full gap-6 md:gap-10 bg-muted/20">
      <div className="bg-[#2C0922]  min-h-175.75  rounded-[16px] md:rounded-[20px] p-5 md:p-10">
        <div className="flex flex-wrap min-h-159.75 gap-5 md:gap-12">
          {/* Heading - appears first on mobile */}
          <div className="w-full md:hidden">
            <h3 className="h-num text-primary-foreground text-center">
              Management Development Program
            </h3>
          </div>
          <div className="w-full md:flex-1">
            <Image
              src="/images/MDP_image.jpg"
              alt="LMS Image"
              width={592}
              height={639}
              className="h-81.75 w-full md:w-148 md:h-full rounded-[8px] object-cover"
            />
          </div>
          <div className="text-background w-full h-full flex flex-col gap-8 md:flex-1">
            <div className="space-y-5">
              <h3 className="hidden md:block h-num text-left">
                Management Development Program
              </h3>
              <p className="h6-normal">
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the high
                -performing leaders they need to thrive.
              </p>
              <p className="h6-normal">
                Our program includes workshops, seminars, coaching sessions,
                online courses, and experiential learning opportunities designed
                to improve leadership, strategic thinking, communication, and
                other essential managerial competencies for corporate
                organisations.
              </p>
            </div>
            <div className="flex flex-col gap-6.25 py-2 px-4">
              {MDPItems.map((item) => (
                <Badge
                  key={item}
                  variant="ghost"
                  className="h-10 bg-[#8F6182] w-full rounded-[8px] justify-start! gap-2.5 py-1 px-2 hover:bg-[#8F6182]! hover:text-primary-foreground"
                >
                  <Zap
                    className="fill-primary-foreground shrink-0"
                    strokeWidth={0}
                    size={16}
                  />

                  <span className="h6-normal text-left">{item}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDProgram;
