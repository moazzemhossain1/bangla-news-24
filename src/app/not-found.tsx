import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-black text-[#C2F800]">404</h1>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          Sorry, this page doesn't exist.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-xl bg-[#C2F800] text-black font-bold"
          >
            Go Home
          </Link>

          <Link
            href="/news"
            className="px-8 py-3 rounded-xl border border-[#1E293B] text-white"
          >
            Browse News
          </Link>
        </div>
      </div>
    </div>
  );
}