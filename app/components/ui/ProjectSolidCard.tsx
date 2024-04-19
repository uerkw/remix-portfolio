"use client";
import { useRef, useState } from "react";


interface ProjectCardProps {
  title: string,
  text: string,
}
 
export const ProjectCard = (props: ProjectCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
className="h-full relative max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 px-4 py-6 lg:px-8 lg:py-16 shadow-2xl"
    >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
          }}
        />
        <span className="mb-1 md:mb-4 inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          />
        </span>
        <h3 className="mb-2 font-medium tracking-tight text-white">{props.title}</h3>
        <p className="text-sm text-slate-400">
          {props.text}
          
        </p>
    </div>
  );
};
