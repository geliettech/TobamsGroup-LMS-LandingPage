import { ConsultantProps } from "@/types";

const ConsultantItem = ({title, desc}: ConsultantProps) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-155.5">
      <h4 className="h6-bold">{title}</h4>
      <p className="h6-normal">{desc}</p>
    </div>
  );
};

export default ConsultantItem;
