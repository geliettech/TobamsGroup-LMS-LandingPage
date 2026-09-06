import Booking from "@/components/booking";
import CTA from "@/components/CTA";
import Frame from "@/components/frame";
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
      <div className="bg-muted/20 px-4 md:px-0">
        <div className="bg-background min-h-374.25 rounded-t-[16px] py-4 md:p-16 space-y-14 md:space-y-30">
          <Frame
            heading="Corporate Trainings"
            wrapClassName="flex-row-reverse"
            src="/images/training_1.jpg"
            description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
            items={[
              "Leadership Training",
              "Strategic Planning and Implementation",
              "Project Management",
              "Sustainability Training",
              "Customised Training",
            ]}
          />
          <Frame
            heading="Personalised Individual Training"
            src="/images/training_2.jpg"
            description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
            items={[
              "Leadership Development",
              "Soft Skills Development",
              "Industry Specific Knowledge",
              "Technical Skills Enhancement",
              "Time Management and Productivity",
              "Career Development",
            ]}
          />
          <Frame
            heading="Capacity Development"
            wrapClassName="flex-row-reverse"
            src="/images/training_3.jpg"
            description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
            items={[
              "Tailored Training Programs",
              "Expert-Led Workshops",
              "Personalized Mentorship",
              "Technical Skills Enhancement",
              "Collaborative Learning Environment",
              "Ongoing Support and Resources",
            ]}
          />
        </div>
      </div>
      <ManagementDavelopmentProgram />
      <TransformationHub />
      <Booking />
      <Testimonials />
      <CTA />
    </div>
  );
}
