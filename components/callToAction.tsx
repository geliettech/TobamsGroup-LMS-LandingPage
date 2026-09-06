import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <div className="w-81.75 md:w-283.5 mx-auto bg-primary text-primary-foreground rounded-[8px] flex flex-col justify-center items-center gap-8 py-8 px-6 md:px-16 min-h-51 text-center">
      <p className="h5 leading-[150%]! tracking-[3%]">
        Want to accelerate professional growth and development at your
        organisation?
        <br />
        See how we can help.
      </p>
      <Button className="h6 bg-primary-foreground text-primary rounded-lg py-[11.5px] px-5.5 h-11.25 w-48.25">
        Book a Consultation
      </Button>
    </div>
  );
};

export default CallToAction;
