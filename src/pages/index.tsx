import { Hero, AboutMe, Projects, Contact } from "@/components";

export default function IndexPage() {
  return (
    <div className="z-40 mx-auto mt-10">
      <Hero />
      <AboutMe />
      <Projects />
      <div className="mx-auto my-2 flex h-16 w-full max-w-4xl flex-row items-center justify-center px-6 sm:my-5 sm:px-4 md:mb-1 md:mt-8 md:px-8 lg:mb-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent dark:via-neutral-50/20" />
      </div>
      <Contact />
    </div>
  );
}
