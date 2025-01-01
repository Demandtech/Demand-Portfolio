export default function MyStory() {
  const startDate = new Date("03-22-2022");
  const now = new Date();

  let yearDifference = now.getFullYear() - startDate.getFullYear();

  const hasNotReachedAnniversary =
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() < startDate.getDate());

  if (hasNotReachedAnniversary) {
    yearDifference--;
  }

  return (
    <section className="mt-10 pb-10" id="about">
      <div className="w-full lg:max-w-[90%] mx-auto bg-bgsecondary py-12">
        <div className="max-w-[1500px] px-[20px] lg:px-[30px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 text-primary">
          <div>
            <h2 className="font-noto text-3xl font-semibold">
              About <br /> Me
            </h2>
          </div>
          <div className="text-primary font-comic font-[300] text-lg md:text-2xl max-w-[1040px] flex flex-col gap-10">
            <p>
              I am Rasheed, a results-driven software developer with{" "}
              {yearDifference}+ years of experience designing and delivering
              scalable, high-performance web applications that drive exceptional
              user experiences for businesses and startups globally. I am
              actively exploring new opportunities where I can contribute my
              skills and enthusiasm, don&apos;t hesitate to reach out!
            </p>
            <div>
              <p>My core technologies:</p>
              <p>Languages: Javascript, Typescript.</p>
              <p>
                Technologies: React.js, Next.js, Node.js, Express.js, React
                Native.
              </p>
              <p>
                Tools & Platforms: Git, GitHub, Netlify, Vercel, AWS, Firebase,
                Figma, Expo.
              </p>
              <p>Databases: SQL, PostgreSQL, MongoDB, Redis.</p>
              <p>Testing: E2E Testing, Unit & integrations testing (Jest).</p>

              <p>Styling: Css, Tailwind CSS, Sass, Styled Components.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
