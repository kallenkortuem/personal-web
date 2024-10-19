import { DarkModeToggle } from "@/components/DarkModeToggle";
import ProfileMenu from "@/components/ProfileMenu";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="grid grid-rows-[auto_20px_1fr_20px] items-center justify-items-center min-h-screen  pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <header className="w-full p-4 flex items-center justify-between fixed top-0 left-0 right-0">
        <div></div>
        <div className="flex flex-row gap-4 items-center">
          <DarkModeToggle />
          {!session && (
            <a
              className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 px-1 sm:px-6"
              href="/api/auth/login"
            >
              Login
            </a>
          )}
          {session && <ProfileMenu />}
        </div>
      </header>
      <main className="flex flex-col gap-6 row-start-3 items-center sm:items-start pt-24">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-2">
            Kallen Kortuem
          </h1>
          <p className="text-muted-foreground">
            Full-stack engineer, designer, and creator.
          </p>
        </div>
        <ol className="">
          <li className="mb-2">
            learn more <Link href="/about-me">about me</Link>
          </li>
          <li className="mb-2">
            explore my <Link href="/experience">experience</Link>
          </li>
          <li>
            and feel free to <Link href="/contact">contact me</Link>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Employ now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my docs
          </a>
        </div>
      </main>
    </div>
  );
}
