import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const LMSBlock = () => {
  return (
    <div className="h-[664px] px-[64px] flex items-center flex-wrap">
      <div className="flex">
        <div className="w-[556.8795166015625px]">
          {/* <Image src="" alt="LMS_Image" /> */}
        </div>
        <div className="w-[675.1204833984375px]">
          <h3 className="">Learning Management System</h3>
          <div className="">
            <p className="">TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.</p>
            <h6 className="">Some of our courses include:</h6>
            <ul className="">
              <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default LMSBlock;
