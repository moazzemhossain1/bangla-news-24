import Catogroypge from "@/app/catogory/[id]/page";
import Link from "next/link";
import React from "react";

type Category = {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
};

const handleFeachingdata = async (): Promise<Category[] | null> => {
    try {
        const res = await fetch(
            "https://news-api-v2.vercel.app/api/categories",
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch categories");
        }

        const result = await res.json();

        const filteredCategories: Category[] = result.data.filter(
            (item: Category) => item.scrapable
        );

        return filteredCategories;
    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
};

const CotagoriFatch = async () => {
    const categories = await handleFeachingdata();

    if (!categories) {
        return (
            <div className="text-center text-red-500 py-5">
                ক্যাটাগরি লোড করা যায়নি।
            </div>
        );
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            <Link href={"/"} className="text-gray-700 font-medium hover:text-red-600 cursor-pointer transition-colors">
                হোম
            </Link>

            {categories.map((category) => (
                <Link href={`/catogory/${category.slug}`} key={category.slug} className="text-gray-700 font-medium hover:text-red-600 cursor-pointer transition-colors">

                    {category.title}

                </Link>
            ))}
        </div>
    );
};

export default CotagoriFatch;