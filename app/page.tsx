import Booking from "@/components/booking";
import CTA from "@/components/CTA";
import Hero from "@/components/hero";
import LMSBlock from "@/components/LMSBlock";
import ManagementDavelopmentProgram from "@/components/managementDavelopmentProgram";
import Testimonials from "@/components/testimonials";
import TransformationHub from "@/components/transformationHub";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LMSBlock />
      <div className="">
        <div className="">Corporate Trainings</div>
        <div className="">personal individual</div>
        <div className=""> capacity development</div>
      </div>
      <ManagementDavelopmentProgram />
      <TransformationHub />
      <Booking />
      <Testimonials />
      <CTA />
    </div>
  );
}
