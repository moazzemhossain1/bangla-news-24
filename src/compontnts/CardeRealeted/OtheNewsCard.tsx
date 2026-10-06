import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Article = {
    id: string | number;
    title: string;
    imageUrl: string;
    category?: string;
    description?: string;
};

type OtheNewsCardProps = {
    article: Article;
};

const OtheNewsCard: React.FC<OtheNewsCardProps> = ({ article }) => {
    return (
        <div>
            <Link href={`/news/${article.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-72">
                        <Image
                            src={article.imageUrl}
                            alt={article.title || "News article image"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="p-5">
                        {article.category && (
                            <p className="text-red-600 font-semibold mb-2">
                                {article.category}
                            </p>
                        )}

                        <h2 className="font-bold text-black mb-3 hover:text-red-600 cursor-pointer">
                            {article.title}
                        </h2>

                        {article.description && (
                            <p className="text-gray-600 line-clamp-3 mb-4">
                                {article.description}
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default OtheNewsCard;