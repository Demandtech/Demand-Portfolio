import { Hero, AboutMe, Projects } from "@/components";

export default function IndexPage() {
  return (
    <div className="z-40 mx-auto mt-10">
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
