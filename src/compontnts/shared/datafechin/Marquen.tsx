import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type NewsItem = {
  id: string;
  title: string;
};

type NewsResponse = {
  data: NewsItem[];
};

const Marquen = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=30",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data: NewsResponse = await res.json();

  return (
    <section className="sticky top-24 z-50 w-full bg-red-600">
      <div className="container mx-auto overflow-hidden py-2">
        <div className="flex items-center gap-2">
          <h3 className="shrink-0 bg-red-700 px-5 py-2 font-semibold text-white">
            সর্বশেষ
          </h3>

          <div className="flex-1 overflow-hidden">
            <MarqueeText direction={"right"} duration={10                                                                                                                     }>
              <div className="flex items-center">
                {data?.data?.map((item) => (
                  <Link
                    key={item.id}                                                                                                                       
                    href={`/news/${item.id}`}
                    className="mx-5 whitespace-nowrap text-sm font-medium text-white hover:underline md:text-base"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </MarqueeText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquen;