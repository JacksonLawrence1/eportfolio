import Back from "@/components/back";
import Project from "./project";

import { BsSortDown } from "react-icons/bs";

import { projects } from "./projectStore";

const OpenSortMenu = () => {
  return (
    <div>

    </div>
  )
}

const Projects = () => (
  <div className="flex flex-col justify-center items-center gap-8 pt-20 pb-8">
    <div className="flex justify-center items-center gap-4">
      <h1 className="text-5xl text-secondary">Projects</h1>
      <div className="icon group">
        <BsSortDown />
        <span className="icon-tooltip group-hover:scale-100">
          Sort By (WIP)
        </span>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-y-4">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
    <Back />
  </div>
);

export default Projects;
