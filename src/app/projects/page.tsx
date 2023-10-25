import Back from "@/components/back";
import Project from "./project";

import { projects } from "./projectStore";

const Projects = () => (
  <div className="flex flex-col justify-center items-center gap-8 pt-16 pb-8">
    <h1 className="text-5xl text-secondary">Projects</h1>
    <div className="flex flex-wrap items-center justify-center gap-y-4">
      {projects.map((project) => (
        <Project
          key={project.title}
          {...project}
        />
      ))}
    </div>
    <Back />
  </div>
);

export default Projects;
