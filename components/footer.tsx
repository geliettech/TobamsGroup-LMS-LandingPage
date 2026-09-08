import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { footerSections } from "@/data/page";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1D0617] border md:border-b-2 border-b-[#C4C4C4] p-6 md:py-10 md:px-16 min-h-50.25 md:min-h-39.75 w-full flex flex-wrap justify-between items-center">
        <div className="space-y-4 md:space-y-2.5 text-primary-foreground">
          <p className="h6-normal">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="h3">Let’s work together to create a difference</h2>
        </div>
        <Button className="mt-5 md:mt-0 h6 rounded-lg py-3 px-6 h-12 w-37.75 ">
          Get In Touch
        </Button>
      </div>
      {/* final footer */}
      <div className="bg-[#11040E] px-8.5 md:px-16 py-8 md:py-16 text-primary-foreground">
        {/* Footer top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="">
              <Link href="/" className="shrink-0">
                <Image
                  src="/Logo.svg"
                  width={188}
                  height={73}
                  alt="tobamsgroup_Logo"
                  loading="eager"
                  className="h-auto w-32 sm:w-36 lg:w-41.5"
                />
              </Link>
            </div>

            <p className="text-[#F8F8F8] h6-normal max-w-89">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-background p-2.5  gap-2.5 text-[#151515] flex items-center justify-center"
              >
                <FaLinkedinIn size={18} />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-background p-2.5  gap-2.5 text-[#151515] flex items-center justify-center"
              >
                <BiLogoInstagramAlt size={18} />
              </Link>
              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-background p-2.5  gap-2.5 text-[#151515] flex items-center justify-center"
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="h5-bold">{section.title}</h3>

              <ul className="space-y-2 base">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="w-full border-0 border-t-2 border-[#2A1B27] my-6 md:hidden" />
        <div className="py-5 gap-6">
          <div className="bg-background/6 rounded-[8px] p-6 flex flex-col-reverse md:flex-row  gap-6">
            <div className="space-y-2.5">
              <h3 className="h5-bold">Registered Offices</h3>
              <div className="flex items-center flex-col md:flex-row gap-6">
                <div className="">
                  <h6 className="base-semibold text-secondary">
                    United Kingdom
                  </h6>
                  <p className="base">
                    07451196 (Registered by Company House)
                    <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    <br />
                    Kingdom, RM1 4QA
                  </p>
                </div>
                <div className="md:border-l-2 md:border-l-[#2A1B27] md:pl-6">
                  <h6 className="base-semibold text-secondary">Nigeria</h6>
                  <p className="base">
                    RC 1048722 (Registered by the Corporate Affairs Commission)
                    <br />
                    4, Muaz Close, Awangiri-Rimi
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2.5 md:border-l-2 md:border-l-[#2A1B27] md:pl-6">
              <h3 className="h5-bold">Contact Information</h3>

              <Link
                href="mailto:theteam@tobamsgroup.com"
                className="flex items-center gap-2"
              >
                <MdEmail className="w-6 h-6 text-secondary" />
                <span className="base">theteam@tobamsgroup.com</span>
              </Link>

              <Link
                href="tel:+447886600748"
                className="flex items-center gap-2"
              >
                <IoMdCall className="w-6 h-6 text-secondary" />
                <span className="base">+447886600748</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-0 border-t-2 border-[#2A1B27] my-6" />

        {/* Bottom */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-[14px] font-light leading-9">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>

          <div className="flex justify-center gap-x-6 gap-y-0 text-[14px] font-light leading-9 flex-wrap">
            <Link
                href="/"
                className="underline underline-offset-2 order-3 md:order-1"
            >
              Terms and Conditions
            </Link>

            <Link
                href="/"
                className="underline underline-offset-2 order-1 md:order-2"
            >
              Privacy Policy
            </Link>

            <Link
                href="/"
                className="underline underline-offset-2 order-2 md:order-3"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
