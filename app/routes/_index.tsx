import type { MetaFunction } from "@remix-run/cloudflare";
import {
  HuffmanProjectCard,
  LSystemsProjectCard,
  PortfolioProjectCard,
  SolidProjectCard,
} from "~/components/ui/CompositeProjectCards";
import { ExperienceItem } from "~/components/ui/ExperienceItem";

export const meta: MetaFunction = () => {
  return [
    { title: "Kyle Uerkwitz - Engineer" },
    {
      name: "description",
      content:
        "Kyle Uerkwitz - Designing web experiences with craftsmanship in mind",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start  bg-slate-900 text-slate-400">
      <div className="flex flex-col max-w-6xl justify-center rounded-[inherit] bg-slate-900 p-6 pb-8 md:py-28">
        <div className="mb-5 flex grow flex-col text-5xl">
          <h1 className="pb-0 text-4xl font-bold text-slate-200 md:pb-2 md:text-6xl">
            Kyle Uerkwitz
          </h1>
          <h2 className="text-lg tracking-tight md:text-2xl pb-0 md:pb-1">
            Full-Stack Engineer, Educator, Hacker.
          </h2>
          <p className="text-lg md:text-xl">
            Passionately building, tinkering, and creating.
          </p>
        </div>
        <div className="mb-4 text-sm md:mb-12 md:text-xl">
          <h1 className="mb-1 text-xl font-bold tracking-wider text-slate-200 md:mb-4 md:text-4xl">
            ABOUT
          </h1>
          <p>
            I&apos;m a 24 year old software enthusiast with 5 years experience
            building web apps at scale. I&apos;m amibitious about the delivery
            of web apps, and the architecture that powers highly available
            software. I've delivered applications on platforms such as AWS,
            Azure, and on-premises that power education SaaS solutions,
            healthcare and medtech platforms, and applications adhering to
            governance compliance. Lately, I&apos;ve been working on
            applications with varying levels of reactivity, and self-hosting
            Kubernetes on virtual cloud servers.
          </p>
        </div>
        <h1 className="mb-1 text-xl tracking-wider font-bold text-slate-200 md:mb-4 md:text-4xl">
          PROJECTS
        </h1>
        <div className="flex flex-row flex-wrap content-center justify-center gap-x-4 gap-y-4 pb-4">
          <div className="w-full md:w-1/3">
            <SolidProjectCard />
          </div>

          <div className="w-full md:w-1/3">
            <HuffmanProjectCard />
          </div>
          <div className="w-full md:w-1/3">
            <LSystemsProjectCard />
          </div>
          <div className="w-full md:w-1/3">
            <PortfolioProjectCard />
          </div>
        </div>
        <h1 className="mb-1 text-xl tracking-wider font-bold text-slate-200 md:mb-4 md:text-4xl">
          EXPERIENCE
        </h1>
        <div className="flex flex-col items-center gap-4 pt-4">
          <ExperienceItem
            company="Taazaa Inc."
            title="SOFTWARE ENGINEER II"
            timespan="Mar 2023 - Oct 2023"
          />
          <ExperienceItem
            company="AstraZeneca"
            title="BACK-END ENGINEER"
            timespan="Jun 2022 - Dec 2022"
          />
          <ExperienceItem
            company="Powerschool"
            title="FULL-STACK ENGINEER"
            timespan="Jan 2022 - Jun 2022"
          />
        </div>
      </div>
    </div>
  );
}
