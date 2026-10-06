import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
    params: Promise<{
        newsId: string;
    }>;
};

const NewsCarde = async ({ params }: PageProps) => {
    const { newsId } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsId}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        notFound();
    }

    const result = await res.json();
    const article = result?.data;
    if (!article) {
        notFound();
    }

    return (
        <section className="min-h-screen bg-slate-100 py-10">
            <div className="mx-auto max-w-5xl px-4">
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                    {/* Hero Image */}
                    <div className="relative h-[250px] w-full md:h-[450px]">
                        {article?.imageUrl && (
                            <Image
                                src={article.imageUrl}
                                alt={article?.title || "Article hero image"}
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-6 md:p-10">
                            {article?.source && (
                                <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white">
                                    {article.source}
                                </span>
                            )}

                            <h1 className="mt-4 max-w-4xl text-2xl font-bold text-white md:text-5xl">
                                {article?.title}
                            </h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                        {/* Meta */}
                        <div className="mb-8 flex flex-wrap gap-5 border-b pb-5 text-sm text-gray-600">
                            {article?.firstPublished && (
                                <span>
                                    📅{" "}
                                    {new Date(article.firstPublished).toLocaleDateString(
                                        "bn-BD"
                                    )}
                                </span>
                            )}

                            {article?.source && <span>📰 {article.source}</span>}

                            {article?.wordCount && <span>📖 {article.wordCount} Words</span>}
                        </div>

                        {/* Description */}
                        {article?.description?.blocks?.[0]?.model?.blocks?.[0]?.model
                            ?.text && (
                                <div className="mb-8 rounded-2xl border-l-4 border-red-600 bg-gray-100 p-5">
                                    <p className="leading-8 text-black">
                                        {
                                            article.description.blocks[0].model.blocks[0].model.text
                                        }
                                    </p>
                                </div>
                            )}

                        {/* Article Body */}
                        <article className="space-y-6">
                            {article?.body?.map((item: any, index: number) => {
                                if (item.type === "text") {
                                    return (
                                        <p
                                            key={index}
                                            className="text-justify text-[18px] leading-9 text-black"
                                        >
                                            {item.text}
                                        </p>
                                    );
                                }

                                if (item.type === "subheading") {
                                    return (
                                        <h2
                                            key={index}
                                            className="mt-10 text-3xl font-bold text-black"
                                        >
                                            {item.text}
                                        </h2>
                                    );
                                }

                                if (item.type === "image" && item.url) {
                                    return (
                                        <div key={index} className="my-8">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                                                <Image
                                                    src={item.url}
                                                    alt={item.altText || item.caption || "Article image"}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                                />
                                            </div>

                                            {item.caption && (
                                                <p className="mt-3 text-center text-sm text-gray-600">
                                                    {item.caption}
                                                </p>
                                            )}
                                        </div>
                                    );
                                }

                                return null;
                            })}
                        </article>

                        {/* Tags */}
                        {article?.tags?.length > 0 && (
                            <div className="mt-10 border-t pt-6">
                                <h3 className="mb-4 text-xl font-semibold text-black">
                                    Related Topics
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {article.tags.map(
                                        (tag: string, index: number) => (
                                            <span
                                                key={index}
                                                className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
                                            >
                                                #{tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsCarde;