"use client";

import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";

type ProjectProps = {
  title: string;
  date: string;
  description: string;
  skills: Array<string>;
  buttons: Array<{ name: string; link: string }>;
  image: string;
};

const Project = (project: ProjectProps) => {
  Router;

  return (
    <div className="card flex flex-col w-96 gap-4 h-max justify-between py-6">
      <div>
        <h1 className="text-center text-3xl">{project.title}</h1>
        <h1 className="text-center text-lg">{project.date}</h1>
      </div>
      <img
        className="rounded-lg relative w-full h-48 object-cover"
        src={project.image}
        alt={project.title}
      />
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <p
            key={skill}
            className="bg-secondary text-accent-1 px-2 py-1 rounded-lg text-sm"
          >
            {skill}
          </p>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {project.buttons.map((button) => (
          <Link
            key={button.name}
            className="button text-lg hover:scale-110 px-2"
            href={button.link}
          >
            {button.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
