import Link from "next/link";

type NewsItem = {
  id: string;
  title: string;
};

type NewsResponse = {
  data: NewsItem[];
};

export default async function MostRead() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
    {
      cache: "no-store",
    }
  );

  const data: NewsResponse = await res.json();

  return (
    <div className="space-y-3 p-5 rounded-lg bg-gray-200">
        <h3 className="font-bold text-2xl my-4">সর্বাধিক পঠিত</h3>
      {data.data.map((item, index) => (
        <div key={item.id} className="flex gap-3 items-start">
          <span className="font-bold text-red-600">
            {index + 1}.
          </span>

        
          <Link href={`/news/${item.id}`}>
          <p className="text-black font-bold hover:text-red-600 cursor-pointer ">
            {item.title}
          </p>
          
          </Link>
          
         
        </div>
      ))}
    </div>
  );
}