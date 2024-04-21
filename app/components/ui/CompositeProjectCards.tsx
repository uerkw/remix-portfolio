import { HighlightCard } from "./HighlightCard";
import { ProjectCardDetails } from "./ProjectCardDetails";

export const SolidProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/solid-uploader">
      <HighlightCard>
        <ProjectCardDetails
          title="SolidJS Uploader"
          text="Bringing fine-grained reactivity to your S3 buckets. Manage and upload files from a convenient web app to any compatible storage provider"
          github_url="https://github.com/uerkw/solid-uploader"
        />
      </HighlightCard>
    </a>
  );
};

export const HuffmanProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/huffman-CPP">
      <HighlightCard>
        <ProjectCardDetails
          title="Huffman Encoder"
          text="Implementation of Huffman encoding and compression. Works best with ASCII text for demonstration purposes"
          github_url="https://github.com/uerkw/huffman-CPP"
        />
      </HighlightCard>
    </a>
  );
};

export const LSystemsProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/javaLindenmeyer">
      <HighlightCard>
        <ProjectCardDetails
          title="L-Systems"
          text="Create drawings that mimic plant growth behavior! An implementation of Lindenmeyer parallel rewriting systems using JavaFX and turtle graphics drawing"
          github_url="https://github.com/uerkw/javaLindenmeyer"
        />
      </HighlightCard>
    </a>
  );
};

export const PortfolioProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/uerk.dev">
      <HighlightCard>
        <ProjectCardDetails
          title="Portfolio Page"
          text="The page you're reading now! Made with 💖 using React, Remix, and Tailwind. All hosted for free on CloudFlare Pages! "
        />
      </HighlightCard>
    </a>
  );
};
