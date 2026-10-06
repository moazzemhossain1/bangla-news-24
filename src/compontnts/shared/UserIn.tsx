"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UserIn = () => {
    const handleSingOut = async () => {
        await signOut();
    }
    const { data: session } = useSession();

    const user = session?.user;

    console.log(user);

    return (
        <div className="flex items-center gap-3" >

            {
                user ? <div className="flex items-center gap-3">
                    <Link href={"/profile"}>
                        <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image as string} />
                            <Avatar.Fallback>JD</Avatar.Fallback>

                        </Avatar>


                    </Link>

                    <Button variant="danger-soft" onClick={handleSingOut}>Sign Out</Button>

                </div>

                    :
                    <div className="flex items-center gap-3">
                        <Link
                            href="/signin"
                            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signup"
                            className="px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium shadow-md hover:bg-red-700 transition-all duration-300"
                        >
                            সাইন আপ
                        </Link>
                    </div>
            }

        </div>
    );
};

export default UserIn;