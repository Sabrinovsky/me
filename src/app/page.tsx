import Image from "next/image";

export default function Post() {
  return (
    <>
      <div className="mt-16">
        <nav>
          <ul className="flex items-center justify-center gap-20 text-xl">
            <li className="">
              Me
            </li>
            <li>
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              >
                <Image
                  src="eu.jpg"
                  alt="Matheus"
                  className="rounded-full"
                  width={150}
                  height={24}
                  priority
                />
              </a>
            </li>
            <li>
              Blog
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">


        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}