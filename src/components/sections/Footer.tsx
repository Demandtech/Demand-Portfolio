import { GithubIcon, TwitterIcon } from "../Svgs";

function Footer() {
  return (
    <div className="flex flex-col gap-10 pb-16">
      <div className="flex justify-center gap-5">
        <a
          className="opacity-60 hover:opacity-100"
          href="https://github.com/demandtech"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon className="stroke-primary" />
        </a>
        <a
          className="opacity-60 hover:opacity-100"
          href="https://x.com/ara_tuntun"
          rel="noreferrer"
          target="_blank"
        >
          <TwitterIcon className="fill-primary" />
        </a>
      </div>
      <p className="text-center text-xs text-neutral-500 font-inter font-medium">
        &copy; Rasheed Adekunle {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
