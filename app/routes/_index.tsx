import type { MetaFunction } from "@remix-run/cloudflare";
import { ProjectCard } from "~/components/ui/ProjectSolidCard";

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
      <div className="flex flex-col  justify-center rounded-[inherit] bg-slate-900 p-6 pb-8 md:py-28">
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
        <div className="mb-4 w-[300px] text-sm md:mb-12 md:w-[600px] md:text-xl">
          <h1 className="mb-1 text-xl font-bold tracking-wider text-slate-200 md:mb-4 md:text-4xl">
            ABOUT
          </h1>
          <p>
            I&apos;m a 24 year old software enthusiast with 5 years experience
            building web apps at scale. I&apos;m amibitious about the delivery
            of web apps, and the architecture that powers highly available
            software. Lately, I&apos;ve been working on applications with
            varying levels of reactivity, and self-hosting Kubernetes on virtual
            cloud servers.
          </p>
        </div>
        <h1 className="mb-1 text-xl tracking-wider font-bold text-slate-200 md:mb-4 md:text-4xl">
          PROJECTS
        </h1>
        <div className="flex flex-row flex-wrap content-center justify-center gap-x-4 gap-y-4 pb-4">
          <div className="w-full md:w-1/2 lg:w-1/4" >
            <ProjectCard
              title="SolidJS Uploader"
              text="Bringing fine-grained reactivity to your S3 buckets. Manage and upload files from a convenient web app to any compatible storage provider"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <ProjectCard title="Spotify Profile App" text="View your Spotify Profile, some commons statistics, and check out your top plays" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <ProjectCard title="L-Systems" text="Create drawings that mimic plant growth behavior! An implementation of the L-systems using JavaFX and turtle graphics drawing" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <ProjectCard title="Huffman Encoder" text="Implementation of Huffman encoding and compression. Works best with ASCII text for demonstration purposes"/>
          </div>
        </div>
        <h1 className="mb-1 text-xl tracking-wider font-bold text-slate-200 md:mb-4 md:text-4xl">
          EXPERIENCE
        </h1>
      </div>
    </div>
  );
}
