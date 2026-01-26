import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 px-6">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />

        <div className="w-full flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-center text-black dark:text-zinc-50">
            로그인
          </h1>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="h-12 w-full rounded-full border border-black/8 px-5 bg-white text-foreground transition-colors focus:outline-none focus:border-black/20 dark:border-white/[.145] dark:bg-zinc-900 dark:focus:border-white/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-full border border-black/8 px-5 bg-white text-foreground transition-colors focus:outline-none focus:border-black/20 dark:border-white/[.145] dark:bg-zinc-900 dark:focus:border-white/30"
              />
            </div>

            <Link
              href="/main"
              className="h-12 w-full rounded-full bg-foreground text-background font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] mt-2 flex items-center justify-center"
            >
              로그인
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
