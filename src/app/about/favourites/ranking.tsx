import Link from "next/link";

type RankingProps = {
  title: string;
  items: Array<{ name: string; imageLink: string; link?: string }>;
};

const renderLink = (item: {name: string; imageLink: string; link?: string;}) => {
  if (item.link) {
    return (
      <p className="text-lg">
        <Link className={item.link ? "hyperlink" : ""} href={item.link} target="_blank" rel="noopener noreferrer">
          {item.name}
        </Link>
      </p>
    );
  } else {
    return <p className="text-lg">{item.name}</p>;
  }
};

const Ranking = ({ title, items }: RankingProps) => {
  return (
    <div className="ranking-list">
      <div className="card flex flex-col gap-2 w-72">
        <p className="text-center text-2xl">{title}</p>
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 items-center bg-accent-2 p-2 rounded-md shadow-lg">
            <img src={item.imageLink} alt={item.name} className="image-icon" />
            {renderLink(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
