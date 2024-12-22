import { Button } from "@nextui-org/button";

import { FlowerSvg, DownloadIcon } from "../Svgs";

function Contact() {
  return (
    <section className="mb-10" id="contact">
      <div className="w-full lg:max-w-[90%] mx-auto py-12 px-3">
        <div className="max-w-[800px] px-[20px] lg:px-[30px] mx-auto border rounded-3xl  py-10 bg-bgsecondary">
          <div className="lg:max-w-[50%] mx-auto text-center flex flex-col items-center gap-8">
            <div className="relative flex w-full items-center justify-center">
              <span className="absolute left-4 top-1/2 block h-px w-[calc(50%-4rem)] -translate-y-1/2 bg-primary sm:left-0 sm:w-[calc(50%-2.75rem)]" />
              <div className="inline-flex rounded-full border border-primary p-4">
                <FlowerSvg />
              </div>
              <span className="absolute right-4 top-1/2 block h-px w-[calc(50%-4rem)] -translate-y-1/2 bg-primary sm:right-0 sm:w-[calc(50%-2.75rem)]" />
            </div>
            <h4 className="text-4xl  font-inter font-semibold text-primary">
              Let&apos;s make a start on your idea
            </h4>
            <Button className="bg-primary text-bgprimary" size="lg">
              <span>Contact me</span>
              <span className="h-[14px] w-[14px] overflow-hidden">
                <div>
                  <DownloadIcon className="transition duration-300 group-hover:-translate-y-full fill-bgprimary" />
                </div>
                <div>
                  <DownloadIcon className="transition duration-300 group-hover:-translate-y-full fill-bgprimary" />
                </div>
              </span>
            </Button>
            <p className="text-xs text-secondary">
              Transparent pricing. No obligations. <br /> Clear, actionable
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
