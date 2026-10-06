import Image from "next/image";
import Link from "next/link";

type ArticleType = {
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

type Props = {
    nameinNews: ArticleType[];
};

const HomeCard = ({ nameinNews }: Props) => {
    const [firstNews, ...otherNews] = nameinNews;

    if (!firstNews) {
        return <div>No News Found</div>;
    }

    return (
        <div className="grid lg:grid-cols-2 gap-4">
            {/* Left Side Big Card */}
            <Link href={`/news/${firstNews.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-72">
                        <Image
                            src={firstNews.imageUrl}
                            alt={firstNews.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-5">
                        <p className="text-red-600 font-semibold mb-2">
                            {firstNews.category}
                        </p>

                        <h2 className="text-2xl font-bold text-black mb-3 hover:text-red-600 cursor-pointer ">
                            {firstNews.title}
                        </h2>

                        <p className="text-gray-600 line-clamp-3 mb-4">
                            {firstNews.description}
                        </p>


                    </div>
                </div>

            </Link>

            {/* Right Side Title List */}
            <div className="space-y-4">
                {otherNews.slice(1, 8).map((news, index) => (
                   
                    <Link  href={`/news/${news.id}`}
                        key={news.id}
                        className="border-b pb-3 last:border-b-0"
                    >
                        <div className="flex gap-3">
                            <span className="font-bold text-red-600">
                                {index + 1}
                            </span>

                            <h3 className="font-medium hover:text-red-600 cursor-pointer">
                                {news.title}
                            </h3>
                        </div>
                    
                   
                   </Link>
                ))}
            </div>



        </div>

    );
};

export default HomeCard;