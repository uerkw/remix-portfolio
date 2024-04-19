interface ExperienceItemProps {
  company: string;
  title: string;
  timespan: string;
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <li className="text-lg md:text-xl pb-4">
      <span className="text-xl md:text-2xl font-bold pr-2">{props.company}</span>
      <span className="md:tracking-wider">{props.title}</span>
      <span className="flex">{props.timespan}</span>
    </li>
  );
};
