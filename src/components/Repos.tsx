import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import RepoCard from "./RepoCard";
import RepoCardSkeleton from "./RepoCardSkeleton";

import { RepositoryListType, PaginateProps } from "@/types/index";

function Repos({
  repositories,
  isLoading,
  paginate,
  setPaginate,
}: {
  repositories: RepositoryListType;
  isLoading: boolean;
  paginate: PaginateProps;
  setPaginate: Dispatch<SetStateAction<PaginateProps>>;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(divRef);

  useEffect(() => {
    if (!isInView || paginate.total_page <= paginate.page || isLoading) return;

    setPaginate((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      };
    });
  }, [isInView, isLoading]);

  return (
    <div>
      <div className="flex items-center justify-between bg-bgprimary py-1 px-5 border-y border-[#f2f2f2] dark:border-[#2b2b2b]">
        <h6 className="text-sm text-primary font-medium opacity-50">
          Repositories
        </h6>
        <span className="text-sm text-primary font-medium opacity-50">
          {paginate.total_items}
        </span>
      </div>
      <div className="flex flex-col overflow-auto relative scrollbar-hide">
        {repositories.length > 0 &&
          repositories.map((repo) => <RepoCard key={repo.id} item={repo} />)}

        {isLoading && <RepoCardSkeleton isLoading={isLoading} />}

        <div
          ref={divRef}
          className="h-0.5 w-full bg-transparent sticky bottom-0"
        />
      </div>
    </div>
  );
}

export default Repos;
