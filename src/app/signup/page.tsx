"use client";

import { signIn, signUp } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { router } from "better-auth/api";
import { redirect } from "next/navigation";



export default function SignUpForm() {
    const handleSubmitSinUp = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(
            formData.entries()
        ) as {
            name: string;
            image: string;
            email: string;
            password: string;
        };

        console.log("FORM DATA:", data);

        const { data: resData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.image,
        });

        if (error) {
            console.log("SIGNUP ERROR:", error);
            return;
        }
        if (resData) {
            console.log("SIGNUP SUCCESS:", resData);
            redirect("/")
        }


    };

    const handleSignInGoog = async () => {
            const { data, error } = await signIn.social({
                provider: "google",
                callbackURL: "/",
            });
    
            console.log("DATA:", data);
            console.log("ERROR:", error);
        };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#111827] border border-[#1E293B] rounded-3xl p-8">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    Create Account
                </h1>

                <Form
                    className="flex flex-col gap-5"
                    render={(props) => <form {...props} />}
                    onSubmit={handleSubmitSinUp}
                >
                    {/* Name */}
                    <TextField isRequired name="name">
                        <Label className="text-white">Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Please enter a valid image URL";
                            }
                        }}
                    >
                        <Label className="text-white"> Image Url</Label>
                        <Input placeholder="https://example.com/profile.jpg" />
                        <FieldError />
                    </TextField>


                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-white">Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-white">Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-[#C2F800] text-black font-semibold"
                    >
                        Sign Up
                    </Button>
                    <Button onClick={handleSignInGoog}>SignUp with goole</Button>
                </Form>
            </div>
        </div>
    );
}