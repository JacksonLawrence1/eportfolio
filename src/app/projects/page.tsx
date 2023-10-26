'use client'

import Back from "@/components/back";
import Project from "./project";

import { BsSortDown } from "react-icons/bs";

import { projects } from "./projectStore";

const SortByScale = () => {
  console.log("sorted by scale");
}

const SortByDate = () => {
  console.log("sorted by date");
}

const Projects = () => (
  <div className="flex flex-col justify-center items-center gap-8 pt-20 pb-8">
    <div className="flex justify-center items-center gap-4">
      <h1 className="text-5xl text-secondary">Projects</h1>
      <details>
        <summary className="icon">
          <BsSortDown />
        </summary>
        <ul className="dropdown-content text-lg">
          <li className="px-2 text-accent-1 mt-1 py-1 text-xl">Sort By</li>
          <li className="list-content"><a onClick={SortByScale}>Project Scale</a></li>
          <li className="list-content"><a onClick={SortByDate}>Completion Date</a></li>
        </ul>
      </details>
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
