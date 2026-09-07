import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const LearnMoreBtn = () => {
  return (
    <Button type="button" className="py-[10.5px] px-6 h-11.25 md:h-12 w-38.25 md:w-43.25 rounded-lg h6 flex items-center shrink-0 gap-2">
      <span className="h6">Learn More</span>
      <ArrowUpRight size={24} />
    </Button>
  );
};

export default LearnMoreBtn;
