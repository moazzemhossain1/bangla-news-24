import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-red-600 animate-spin"></div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-white">
          Loading News...
        </h2>

        <p className="mt-2 text-slate-400 text-sm md:text-base">
          Please wait while we fetch the latest news for you.
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></span>
          <span
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;