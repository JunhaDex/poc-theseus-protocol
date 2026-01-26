import Image from "next/image";

export default function MainPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 px-6 py-16">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
            Welcome to Account
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            로그인이 완료되었습니다.
          </p>
        </div>
      </main>
    </div>
  );
}
