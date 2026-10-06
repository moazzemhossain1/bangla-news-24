

import Image from "next/image";
import Link from "next/link";
import CotagoriFatch from "./datafechin/CotagoriFatch";
import UserIn from "./UserIn";





const Header = () => {




  

    const currentDate = new Date().toLocaleDateString("bn-BD", {
        dateStyle:'full'
    });

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* Logo & Info */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.webp"
                            alt="বাংলা নিউজ ২৪"
                            width={70}
                            height={70}
                            priority
                        />

                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                বাংলা নিউজ ২৪
                            </h1>

                            <p className="text-sm text-gray-500">
                                সর্বশেষ খবর সবার আগে
                            </p>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-1 text-sm">
                                <span className="text-gray-600">{currentDate}</span>
                            
                            </div>
                        </div>
                    </div>
                    <div>
                        <CotagoriFatch></CotagoriFatch>
                    </div>

                    {/* Auth Buttons */}
                    <UserIn></UserIn>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;