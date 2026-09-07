import Image from "next/image";
import {  Zap } from "lucide-react";
import { THubItems } from "@/data/page";
import { Badge } from "./ui/badge";
import LearnMoreBtn from "./learnMoreBtn";

const TransformationHub = () => {
  return (
    <section className="min-h-195 p-6 md:p-16 gap-10">
      <div className="min-h-163 bg-[#EF435333] rounded-[12px] md:rounded-[16px] p-6 md:p-10 gap-16">
        <div className="space-y-6">
          <div className="space-y-2 italic">
            <h6 className="text-[#1671D9] h5">Learning With Our CEO:</h6>
            <h3 className="h3 text-primary">
              Transformation Hub With Jite Newton
            </h3>
          </div>
          <div className="h6-normal">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you're seeking to advance your career
            or enhance your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </div>
          <div className="gap-8 flex justify-between flex-wrap self-stretch">
            <div className="">
              <Image
                src="/images/THub_image.jpg"
                alt="LMS Image"
                width={560}
                height={340}
                className="h-81.75 w-full md:w-140 md:h-85 rounded-[8px] object-cover"
              />
            </div>
            <div className="bg-[#FFFFFF4D] px-5 py-8 gap-6 flex flex-col justify-between w-full max-w-160 rounded-[8px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {THubItems.map((item) => (
                  <Badge
                    key={item}
                    variant="ghost"
                    className="h-15 bg-background w-full rounded-[12px] justify-start! p-4 hover:bg-background! hover:text-foreground gap-2.5"
                  >
                    <Zap className="fill-[#EF435333] shrink-0 stroke-0.5 stroke-primary w-7 h-7" />
                    <span className="h6-normal text-left">{item}</span>
                  </Badge>
                ))}
              </div>
              <LearnMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationHub;
