import Card from "@/compontnts/Card";
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

const Catogroypge = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${id}`
  );

  const data = await res.json();

  const news: NewsType[] = data.data;

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold border-b-2 border-red-500 pt-2 mb-4">
        {data.title}
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {news.map((item: NewsType) => (
          <Card dates={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Catogroypge;