"use client";

import { useSession } from "@/lib/auth-client";
import { Card, Button } from "@heroui/react";
import Link from "next/link";

export default function ProfilePage() {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0B1220]">
                <h1 className="text-white text-2xl font-bold">
                    Loading...
                </h1>
            </div>
        );
    }

    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0B1220]">
                <h1 className="text-white text-2xl font-bold">
                    User Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4 py-10">
            <Card className="w-full max-w-xl bg-[#111827] border border-[#1E293B] rounded-3xl shadow-2xl p-8">

                <div className="flex flex-col items-center">

                    {/* Profile Image */}
                    <img
                        src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt={user.name || "Profile"}
                        className="w-32 h-32 rounded-full border-4 border-[#C2F800] object-cover"
                    />

                    {/* Name */}
                    <h1 className="text-white text-3xl font-bold mt-5 text-center">
                        {user.name}
                    </h1>

                    {/* Email */}
                    <p className="text-gray-400 mt-2 text-center break-all">
                        {user.email}
                    </p>

                    {/* Info Cards */}
                    <div className="w-full mt-8 space-y-4">

                        <div className="bg-[#1E293B] rounded-xl p-4">
                            <p className="text-gray-400 text-sm">
                                Full Name
                            </p>

                            <p className="text-white font-medium mt-1">
                                {user.name}
                            </p>
                        </div>

                        <div className="bg-[#1E293B] rounded-xl p-4">
                            <p className="text-gray-400 text-sm">
                                Email Address
                            </p>

                            <p className="text-white font-medium mt-1 break-all">
                                {user.email}
                            </p>
                        </div>

                        <div className="bg-[#1E293B] rounded-xl p-4">
                            <p className="text-gray-400 text-sm">
                                User ID
                            </p>

                            <p className="text-white font-medium mt-1 break-all">
                                {user.id}
                            </p>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="w-full mt-8 flex flex-col sm:flex-row gap-3">

                        <Link
                            href="/editingPage"
                            className="flex-1"
                        >
                            <Button
                                className="w-full bg-[#C2F800] text-black font-bold"
                            >
                                Edit Profile
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            className="flex-1 text-white"
                        >
                            Settings
                        </Button>

                    </div>

                </div>

            </Card>
        </div>
    );
}