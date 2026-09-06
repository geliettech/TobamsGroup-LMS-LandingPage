import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-79.25 md:h-127.75 w-full bg-[url('/images/hero_image.jpg')] bg-cover bg-center relative after:absolute after:inset-0 after:bg-[#000000B2] flex items-center justify-center">
      <div className="relative z-10 text-background flex flex-col justify-center items-center text-center gap-6 md:gap-10 py-10 px-6 w-full max-w-[1312px] h-[287px]">
        <Button
          variant="ghost"
          className="bg-input rounded-full py-3 px-12 h-11.25 w-48.25 base-semibold"
        >
          WHAT WE DO
        </Button>
        <h1 className="h1">Training and Development</h1>
        <p className="h6 w-full max-w-269.25">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <Button className="h6 rounded-lg py-[11.5px] px-5.5 h-11.25 w-48.25 ">
          Book a Consultation
        </Button>
      </div>
    </div>
  );
};

export default Hero;
