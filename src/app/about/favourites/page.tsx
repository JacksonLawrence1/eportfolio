import Ranking from "./ranking";
import { games, movies, directors, tvShows } from "./favouriteStore";
import Back from "@/components/back";

const Favourites = () => {
  return (
    <div className="hero">
      <h1 className="text-secondary text-5xl">Favourites</h1>
      <div className="flex justify-center">
        <Ranking title="Games" items={games} />
        <Ranking title="Movies" items={movies} />
        <Ranking title="Directors" items={directors} />
        <Ranking title="TV Shows" items={tvShows} />
      </div>
      <Back />
    </div>
  );
};

export default Favourites;
