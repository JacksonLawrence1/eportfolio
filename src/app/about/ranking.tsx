import Image from "next/image";

type RankingProps = {
    name: string;
    link: string;
  };

const Ranking = ({name, link}: RankingProps) => {
    return (
        <div className="flex gap-4 items-center text-md">
            <img src={link} alt={name} className="image-icon"/>
            <p>{name}</p>
        </div>
    )
}

export default Ranking