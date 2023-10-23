import Ranking from "./ranking";
import Back from "@/components/back";

const About = () => (
  <div className="flex flex-col items-center h-screen gap-8 justify-center">
    <div className="card max-w-3xl">
      <p className="text-lg">
        Hello, I'm Jackson 👋 I've recently graduated from the University of
        Bristol, where I achieved a first class Master's in Computer Science.
        Currently, I'm particularly interested in
        <span className="font-bold"> front-end work</span> and
        <span className="font-bold"> game development</span> having worked on
        projects in this area in my own time and during my degree (See Projects
        Page), but I am open-minded to work on other similar disciplines. I'm
        incredibly motivated by work which I'm interested in, and would love to
        work on projects which I can be passionate about. When I'm not working
        on my own projects, I love playing video games, watching movies, and
        working out. Some of my favourites can be seen below.
      </p>
    </div>
    <div className="flex justify-center gap-8">
      <div className="card flex flex-col gap-2">
        <p className="text-center text-lg">Favourite Games</p>
        <Ranking
          name="The Elder Scrolls V: Skyrim"
          link="https://image.api.playstation.com/vulcan/ap/rnd/202009/2820/h12URI7MdswtFPFHpkppNh2z.png"
        />
        <Ranking
          name="Baldur's Gate 3"
          link="https://assets-prd.ignimgs.com/2023/08/24/baldursg3-1692894717196.jpeg"
        />
        <Ranking
          name="Factorio"
          link="https://upload.wikimedia.org/wikipedia/en/0/08/Factorio_cover.png"
        />
      </div>
      <div className="card flex flex-col gap-2">
        <p className="text-center text-lg">Favourite Movies</p>
        <Ranking
          name="The Prestige"
          link="https://assets.scriptslug.com/live/img/posters/the-prestige-2006.jpg"
        />
        <Ranking
          name="The Dark Knight"
          link="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
        />
        <Ranking
          name="The Social Network"
          link="https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png"
        />
      </div>
    </div>
    <Back />
  </div>
);

export default About;
