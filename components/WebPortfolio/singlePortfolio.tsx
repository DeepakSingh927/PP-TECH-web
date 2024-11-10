import { Portfolio } from "@/types/portfolio";
import { url } from "inspector";
import Image from "next/image";

const SinglePortfolio = ({ review }: { review: Portfolio }) => {
  const { image, name, url } = review;
  return (
    <div className="rounded-lg bg-white p-0 pb-2 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-black-700 hover:underline"><Image className="" src={image} alt={name} /></a>
      <h3 className="text-center pt-2">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-black-700 hover:underline">
        {name}</a>
        </h3>
      </div>
    </div>
  );
};

export default SinglePortfolio;
