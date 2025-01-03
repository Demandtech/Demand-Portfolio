import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { RepoIcon } from "../Svgs";

import { RepositoryType } from "@/types/index";

function RepoCard({ item }: { item: RepositoryType }) {
  function formatName(str: string) {
    if (!str) return;

    return str
      .replace(/[_-]/g, " ")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <a
      key={item.id}
      className="border-b py-2 px-5 border-white dark:border-[#2b2b2b] hover:bg-bgprimary font-inter "
      href={item.clone_url}
      rel="noreferrer"
      target="_blank"
    >
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <RepoIcon className="fill-primary opacity-50" />
            <p className="text-base font-semibold text-primary-300 hover:underline">
              {formatName(item.name)}
            </p>
          </div>
          <div className="">
            {item?.description ? (
              <p className="text-sm text-accent opacity-50 overflow-ellipsis line-clamp-2">
                {item.description}
              </p>
            ) : (
              <li className="pl-1 text-xs opacity-30 py-1">
                No description added!
              </li>
            )}
          </div>

          <div className="flex text-xs mt-1 gap-2">
            {item.languages.map((language) => {
              const bgColor = languageColors[language] || "bg-gray-200";

              return (
                <div key={language} className="flex items-center gap-1">
                  <span
                    className={twMerge(
                      clsx("w-3 h-3 rounded-[4px] block", bgColor),
                    )}
                  />
                  <span className="opacity-60 text-xs">{language}</span>
                </div>
              );
            })}
          </div>
          {/* )} */}
        </div>
      </div>
    </a>
  );
}

export default RepoCard;

const languageColors: Record<string, string> = {
  PHP: "bg-[#777BB4]",
  HTML: "bg-[#b03e23]",
  CSS: "bg-[#512c77]",
  Python: "bg-[#2d5a81]",
  Dockerfile: "bg-[#2496ED]",
  TypeScript: "bg-[#2a5e9a]",
  JavaScript: "bg-[#b9ad49]",
};
