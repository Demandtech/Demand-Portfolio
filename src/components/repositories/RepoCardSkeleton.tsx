import { Skeleton } from "@nextui-org/skeleton";

export default function RepoCardSkeleton({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <>
      {["", "", "", ""].map((_, index) => (
        <div
          key={index}
          className="py-2 px-5 flex flex-col gap-1 border-b border-white dark:border-[#2b2b2b]"
        >
          <div className="flex gap-2">
            <Skeleton
              className="flex rounded-sm h-5 w-5"
              isLoaded={!isLoading}
            />
            <Skeleton
              className="flex rounded-sm w-full h-5 max-w-[60%]"
              isLoaded={!isLoading}
            />
          </div>
          <div>
            <Skeleton
              className="flex rounded-sm w-full h-4"
              isLoaded={!isLoading}
            />
            <Skeleton
              className="flex rounded-sm w-full h-4"
              isLoaded={!isLoading}
            />
          </div>
          <div className="lg:max-w-[70%] flex gap-2">
            <Skeleton
              className="flex rounded-sm w-full h-4"
              isLoaded={!isLoading}
            />
            <Skeleton
              className="flex rounded-sm w-full h-4"
              isLoaded={!isLoading}
            />
            <Skeleton
              className="flex rounded-sm w-full h-4"
              isLoaded={!isLoading}
            />
            <Skeleton
              className="flex rounded-sm w-full h-4"
              isLoaded={!isLoading}
            />
          </div>
        </div>
      ))}
    </>
  );
}
