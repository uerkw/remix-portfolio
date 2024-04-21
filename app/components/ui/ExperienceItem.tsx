import { HighlightExperience } from "./HighlightExperience";

interface ExperienceItemProps {
  company: string;
  title: string;
  timespan: string;
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <HighlightExperience>
      <div className="flex flex-col">
        <div className="text-xl md:text-2xl font-bold pr-2">
          {props.company}
        </div>
        <div className="md:tracking-wider">{props.title}</div>
        <div className="flex">{props.timespan}</div>
      </div>
    </HighlightExperience>
  );
};
