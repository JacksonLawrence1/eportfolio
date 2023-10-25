import Back from "@/components/back";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";

const SocialIcon = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <div className="icon group">{icon}</div>
  </Link>
);

const About = () => (
  <div className="hero">
    <div className="flex flex-col max-w-3xl gap-4">
      <div className="flex items-center justify-between">
        <h1 className="pl-4 text-4xl text-secondary">Jackson Lawrence, MEng</h1>
        <div className="flex mr-4">
          <SocialIcon
            icon={<BsGithub />}
            link="https://github.com/JacksonLawrence1"
          />
        </div>
      </div>
      <div className="card">
        <p className="text-lg">
          Hello, I&#39;m Jackson 👋 I&#39;ve recently graduated from the University of
          Bristol, where I achieved a first class Master&#39;s in Computer Science.
          Currently, I&#39;m particularly interested in
          <span className="font-semibold"> front-end work</span> and
          <span className="font-semibold"> games development</span>,
          having distinct experience from working on{" "}
          <Link className="hyperlink underline" href="/projects">
            projects
          </Link>{" "}
          in these area during my degree and in my own time. I&#39;m incredibly
          motivated by work which I&#39;m interested in, and would love to work on
          projects which I can be passionate about. When I&#39;m not working on my
          own projects, I love playing video games, reviewing film and TV, and
          working out. Some of my favourites can be found{" "}
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
