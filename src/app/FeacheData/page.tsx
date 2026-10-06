import HomeCard from "@/compontnts/CardeRealeted/HomeCard";
import React from "react";
import MostRead from "../PopulaRead/page";
import OtheNewsCard from "@/compontnts/CardeRealeted/OtheNewsCard";

export type ArticleType = {
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

export type SectionType = {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: ArticleType[];
};

const handleHompageFetchData = async (): Promise<SectionType[]> => {
  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news/sections",
      {
        cache: "no-store",
      }
    );

    const datas = await res.json();
    return datas?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Homepage = async () => {
  const data = await handleHompageFetchData();

  // Safety check in case API fails or returns empty data
  const mainNews = data[0]?.articles || [];
  const newsSections = data.slice(1);

  return (
    <div className="w-full min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-6 lg:my-10">
        {/* Main Grid Layout: Mobile first 1 col, Large screens 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main News Content Area (2 Cols on Large Screen) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Top / Main Hero Card Section */}
            <div>
              <HomeCard nameinNews={mainNews} />
            </div>

            {/* Other News Sections */}
            <div className="space-y-8">
              {newsSections.map((section) => (
                <div key={section.curationId} className="pb-4">
                  {/* Section Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <div className="border-t-2 border-red-500 mb-6"></div>

                  {/* News Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    {section.articles?.map((article) => (
                      <OtheNewsCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Popular News (1 Col on Large Screen) */}
          <div className="w-full bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 h-fit lg:sticky lg:top-5">
            <MostRead />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;