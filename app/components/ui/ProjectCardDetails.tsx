interface ProjectCardProps {
  title: string;
  text: string;
  // icons: ProjectCardIcon[]
}

export const ProjectCardDetails = (props: ProjectCardProps) => {
  return (
    <>
      <span className="mb-1 md:mb-4 inline-flex items-center justify-center rounded-md  p-2 shadow-lg">
        {/* <svg
          className="h-6 w-6 text-white bg-indigo-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        />
        <svg
          className="h-6 w-6 text-white bg-red-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        /> */}

        <img
          src="./github-logo.svg"
          width={64}
          height={64}
          alt="GitHub Icon"
          className="fill-slate-100"
        ></img>
      </span>
      <h3 className="mb-2 font-medium tracking-tight text-white">
        {props.title}
      </h3>
      <p className="text-sm text-slate-400">{props.text}</p>
    </>
  );
};
