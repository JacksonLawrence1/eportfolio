"use client";

import Back from "@/components/back";
import Project from "./project";
import { useState } from "react";

import { BsSortDown } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

import { getProjects } from "./projectStore";

const Projects = () => {
  let [projects, setProjects] = useState(getProjects(1));
  let [sortIndex, setSortIndex] = useState(1);
  let [open, setOpen] = useState(false);

  const toggleOpen = (event : React.MouseEvent) => {
    event.preventDefault();
    setOpen(!open);
  };

  const sortProjects = (index: number) => {
    if (index === sortIndex) return;

    const sortedProjects = getProjects(index);
    setProjects(sortedProjects);
    setSortIndex(index);
  };

  const dropdown = (name: string, index: number) => (
    <li className="list-content" onClick={() => sortProjects(index)}>
      <div className="flex justify-between gap-4 items-center">
        {name} {sortIndex === index && <FaCheck />}
      </div>
    </li>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-20 pb-8">
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-5xl text-secondary">Projects</h1>
        <details open={open} onClick={toggleOpen}>
          <summary className={open ? "icon-enabled" : "icon"} onClick={toggleOpen}>
            <BsSortDown />
          </summary>
          <ul className="dropdown-content text-lg">
            <li className="px-2 text-accent-1 mt-1 py-1 text-xl">Sort By</li>
            {dropdown("Date", 0)}
            {dropdown("Scale", 1)}
            {dropdown("Title", 2)}
            {dropdown("Team Size", 3)}
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
};

export default Projects;
