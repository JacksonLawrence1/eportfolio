import Back from "@/components/back";
import Icon from "@/components/icon";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";

const About = () => (
  <div className="hero">
    <div className="flex flex-col max-w-3xl gap-4">
      <div className="flex items-center justify-between">
        <h1 className="pl-4 text-4xl text-secondary">Jackson Lawrence, MEng</h1>
        <div className="flex mr-4">
          <Icon
            icon={<BsGithub />}
            link="https://github.com/JacksonLawrence1"
          />
        </div>
      </div>
      <div className="card">
        <p className="text-lg">
          Hello, I&#39;m Jackson 👋 I&#39;ve recently graduated from the University of
          Bristol, where I achieved a first class Master&#39;s degree in Computer Science.
          Currently, I&#39;m particularly interested in
          <span className="font-semibold"> front-end work</span> and
          <span className="font-semibold"> games development</span>,
          having distinct experience working in these areas during my degree and in my own time. I&#39;m incredibly
          motivated by work in which I&#39;m interested in, and would love to work on
          projects which I can be passionate about. When I&#39;m not working on my
          own projects, I love playing video games, reviewing film and TV, and
          working out. You can find some of my favourites {" "}
          <Link className="hyperlink underline" href="./about/favourites">
            here
          </Link>
          .
        </p>
      </div>
    </div>
    <Back />
  </div>
);

export default About;
