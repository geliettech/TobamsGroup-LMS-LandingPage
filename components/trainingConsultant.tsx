import ConsultantItem from "./consultantItem";
import LearnMoreBtn from "./learnMoreBtn";

const TrainingConsultant = () => {
  return (
    <section className="bg-card py-10 min-h-180.5 w-full">
      <div className="min-h-160.5 py-12 px-6 md:px-16 bg-muted gap-2.5">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="space-y-3 text-primary">
              <h3 className="h-semibold">Training The Consultant</h3>
              <p className="h6">
                Maximise Your Potential as a Certified Trainer:
              </p>
            </div>
            <div className="space-y-3 h6-normal">
              With the help of our Training Consultants program, take a
              revolutionary step toward becoming a distinguished certified
              training consultant. Learn from professionals in the field,
              immerse yourself in a thorough curriculum, and hone your training
              methods through interactive workshops. Participating in our
              program will enable you to gain expertise in diverse courses while
              also developing the abilities to mentor and encourage others in
              their career advancement.
            </div>
            <div className="bg-primary p-6 rounded-[8px] min-h-63.5 grid grid-cols-1 md:grid-cols-2 gap-5 text-primary-foreground">
              <div className="space-y-5">
                <ConsultantItem
                  title="Expert-Led Learning"
                  desc="Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
                />
                <ConsultantItem
                  title="Comprehensive Curriculum"
                  desc="Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
                />
              </div>
              <div className="space-y-5">
                <ConsultantItem
                  title="Interactive Workshops"
                  desc="Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
                />
                <ConsultantItem
                  title="Global Recognition"
                  desc="You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
                />
              </div>
            </div>
          </div>
          <LearnMoreBtn />
        </div>
      </div>
    </section>
  );
};

export default TrainingConsultant;
