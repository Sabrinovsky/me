import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <div className="mt-16">
        <nav>
          <ul className="flex items-center justify-center gap-20 text-xl">
            <li className="">
              <a>Me</a>
            </li>
            <li>
              <Link href={"/"}>
                <div>
                  <Image
                    src="eu.jpg"
                    alt="Matheus"
                    className="rounded-full"
                    width={150}
                    height={24}
                    priority
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link className="" href="/posts">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="my-10">
        <div className="flex justify-center bg-slate-50">
          <div className="sm:px-5 md:w-6/12 max-w-[1200px]">
          <p className="p-5">
            Experienced Web Developer with a strong focus on delivering
            high-quality web applications. Proficient in React and Angular with
            TypeScript and also experienced Ruby on Rails developer. Adept at
            keeping projects up-to-date with the latest technologies and best
            practices. Committed to Test-Driven Development (TDD) maintaining a
            100% tested codebase. Proactively brings new technologies and
            solutions to enhance codebases and solve daily challenges.
          </p>
          </div>
        </div>
      </main>
    </>
  );
}
