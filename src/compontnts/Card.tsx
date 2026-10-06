import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsType = {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
};

type CardProps = {
  dates: NewsType;
};

const Card = ({ dates }: CardProps) => {
console.log(dates)
  return (
    <div>
    <Link href={`/news/${dates.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative w-full h-72">
          <Image
            src={dates.imageUrl}
            alt={dates.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <p className="text-red-600 font-semibold mb-2">
            {dates.category}
          </p>

          <h2 className="font-bold text-black mb-3 hover:text-red-600 cursor-pointer">
            {dates.title}
          </h2>

          <p className="text-gray-600 line-clamp-3 mb-4">
            {dates.description}
          </p>
        </div>
      </div>
    
    </Link>
    </div>
  );
};

export default Card;