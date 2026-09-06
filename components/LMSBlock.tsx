import Image from "next/image";
import LearnMoreBtn from "./learnMoreBtn";

const LMSBlock = () => {
  return (
    <div className="py-10 bg-card">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 w-full min-h-166 bg-muted py-12 px-6 md:px-16">
        {/* Heading - appears first on mobile */}
        <div className="w-full md:hidden">
          <h3 className="h-num text-primary text-center">
            Learning Management System
          </h3>
        </div>

        {/* Image */}
        <div className="order-2 md:order-1">
          <Image
            src="/images/LMS_Image.jpg"
            alt="LMS Image"
            width={568}
            height={568}
            className="w-81.75 h-81.75 md:w-142 md:h-142 rounded-full object-cover"
          />
        </div>
        <div className="order-3 md:order-2 w-full max-w-[675.1204833984375px] space-y-5">
          {/* Desktop heading */}
          <h3 className="hidden md:block h-num text-primary text-left">
            Learning Management System
          </h3>
          <div className="bg-[#5712441A] p-6 flex flex-col gap-5 rounded-[8px]">
            <p className="h6-normal">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>
            <div className="flex flex-col gap-3">
              <h6 className="h6-bold text-primary">
                Some of our courses include:
              </h6>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 list-disc list-inside base">
                <li>Business Analysis</li>
                <li>Design Thinking</li>
                <li>Effective Communication</li>
                <li>Entrepreneurship</li>
                <li>Career Development</li>
                <li>Business Model</li>
              </ul>
            </div>
          </div>
          <LearnMoreBtn />
        </div>
      </div>
    </div>
  );
};

export default LMSBlock;
