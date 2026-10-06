"use client";


import { signIn } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

export default function SignInForm() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { data: resDat, error } = await signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,


        })
        if (error) {
            console.log("error", error)
            return
        }
        if (resDat) {
            console.log("SIGNUP SUCCESS:", resDat);
            redirect("/")
        }





        //     email:data.email, 
        //     password:data.password,
        //     image: data.image
        // })
        // console.log(resData)
    };

    const handleSignInGoogle = async () => {
        const { data, error } = await signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        console.log("DATA:", data);
        console.log("ERROR:", error);
    };

    const signInpes = async () => {
        const data = await signIn.social({
            provider: "github",
            callbackURL: "/",
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#111827] border border-[#1E293B] rounded-3xl p-8">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    Plase Logine
                </h1>

                <Form
                    className="flex flex-col gap-5"
                    render={(props) => <form {...props} />}
                    onSubmit={handleSubmit}
                >



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
                        Sign In
                    </Button>
                    <Button onClick={handleSignInGoogle}>Sign with goole</Button>
                    <Button onClick={signInpes}>Sign with gitup</Button>
                </Form>

            </div>

        </div>
    );
}