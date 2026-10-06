"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

export default function EditProfilePage() {
    const { data: session } = useSession();

    const user = session?.user;

    const handleUpdateProfile = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        console.log("UPDATED DATA:", data);

        const { data: resDa, error } = await updateUser({
            ...data
        })
        if (error) {
            console.log("error", error)
            return
        }
        if (resDa) {
            console.log("SIGNUP SUCCESS:", resDa);
            redirect("/")

        }

        // Update profile logic here
    };

    return (
        <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-[#111827] border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
                <h1 className="text-3xl font-bold text-white text-center mb-8">
                    Edit Profile
                </h1>

                <Form
                    className="flex flex-col gap-5"

                    onSubmit={handleUpdateProfile}
                >
                    {/* Profile Image Preview */}
                    <div className="flex justify-center">
                        <img
                            src={
                                user?.image ||
                                "https://i.ibb.co/4pDNDk1/avatar.png"
                            }
                            alt="profile"
                            className="w-28 h-28 rounded-full border-4 border-[#C2F800] object-cover"
                        />
                    </div>

                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        defaultValue={user?.name || ""}
                    >
                        <Label className="text-white">Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                        defaultValue={user?.image || ""}
                    >
                        <Label className="text-white">Image URL</Label>
                        <Input placeholder="https://example.com/profile.jpg" />
                        <FieldError />
                    </TextField>

                    {/* Email */}


                    <Button
                        type="submit"
                        className="w-full bg-[#C2F800] text-black font-bold py-3"
                    >
                        Update Profile
                    </Button>
                </Form>
            </div>
        </div>
    );
}