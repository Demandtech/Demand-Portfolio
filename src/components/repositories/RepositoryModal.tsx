import { ChangeEvent, Key, useEffect, useRef, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Tabs, Tab } from "@nextui-org/tabs";

import Repos from "./Repos";

import useGithub from "@/hooks/useGithub";
import { RepositoryListType, PaginateProps } from "@/types/index";
import {
  debounce,
  deleteQueryParameter,
  getQueryParameter,
  setQueryParameter,
} from "@/helpers";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}

export default function App({ isOpen, onOpenChange, onClose }: ModalProps) {
  const targetRef = useRef(null);
  const defaultLanguage =
    getQueryParameter("selected-language") || "TypeScript";
  const searchParams = getQueryParameter("search") || "";
  const { getAllRepositories, isLoading } = useGithub();
  const [repositories, setRepositories] = useState<RepositoryListType>([]);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(defaultLanguage);
  const [paginate, setPaginate] = useState<PaginateProps>({
    page: 1,
    limit: 5,
    total_page: 1,
    total_items: 0,
  });

  const [search, setSearch] = useState(searchParams);
  const [debounceSearch, setDebounceSearch] = useState("");

  const handleDebouncedInputChange = debounce((value: string) => {
    setDebounceSearch(value);
    if (!value) {
      deleteQueryParameter("search");

      return;
    } else {
      setQueryParameter("search", value);
    }

    setRepositories([]);

    if (paginate.page > 1) {
      setPaginate((prev) => ({
        ...prev,
        page: 1,
      }));
    }
  }, 1000);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);

    handleDebouncedInputChange(value);
  };

  const getRepositories = async (
    limit: number,
    lang: string,
    page: number,
    search: string
  ) => {
    const { repos, total_page, total_items } = await getAllRepositories(
      limit,
      lang,
      page,
      search
    );

    setRepositories((prev) => {
      const repoIds = new Set(prev.map((repo) => repo.id));
      const uniqueNewRepos = repos.filter((repo) => !repoIds.has(repo.id));

      const combinedRepos = [...prev, ...uniqueNewRepos];

      return combinedRepos;
    });

    setPaginate((prev) => ({ ...prev, total_page, total_items }));
  };

  function handleSelectionChange(key: Key) {
    setPaginate((prev) => ({ ...prev, page: 1 }));
    setRepositories([]);
    setSelectedLanguage(key as string);
    setQueryParameter("selected-language", key as string);
  }

  useEffect(() => {
    if (!isOpen) return;

    getRepositories(
      paginate.limit,
      selectedLanguage,
      paginate.page,
      debounceSearch
    );
  }, [selectedLanguage, isOpen, paginate.page, debounceSearch]);

  return (
    <>
      <Modal
        ref={targetRef}
        className="bg-bgsecondary rounded-md h-full max-h-[450px] max-w-[500px] border border-white dark:border-[#2b2b2b] overflow-hidden"
        classNames={{
          backdrop: "blur-sm z-[80]",
          closeButton: "mt-2 text-3xl",
          wrapper: "rounded-sm z-[90]",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        scrollBehavior="inside"
        size="lg"
        onClose={onClose}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1 border-b border-white dark:border-[#2b2b2b]">
                <Input
                  isClearable
                  className="max-w-[200px]"
                  classNames={{
                    inputWrapper: "bg-transparent",
                  }}
                  placeholder="Search..."
                  radius="none"
                  value={search}
                  variant="underlined"
                  onChange={handleInputChange}
                  onClear={() => {
                    setSearch("");
                    setDebounceSearch("");
                    deleteQueryParameter("search");
                  }}
                />
              </ModalHeader>
              <ModalBody className="px-0 mx-0 py-0">
                <Tabs
                  aria-label="Public github repositories"
                  className="mt-2 sticky-0 px-5"
                  classNames={{
                    panel: "px-0 py-0",
                    tabList: "sticky top-0",
                    tab: "data-[disabled=true]:opacity-70",
                  }}
                  defaultSelectedKey={selectedLanguage}
                  isDisabled={isLoading}
                  items={languages}
                  selectedKey={selectedLanguage}
                  size="sm"
                  onSelectionChange={(key) => handleSelectionChange(key)}
                >
                  {languages.map((item) => (
                    <Tab
                      key={item.label}
                      aria-disabled={isLoading}
                      title={
                        <div className="flex items-center space-x-2">
                          <span>{item.label}</span>
                        </div>
                      }
                    >
                      <Repos
                        isLoading={isLoading}
                        paginate={paginate}
                        repositories={repositories}
                        setPaginate={setPaginate}
                      />
                    </Tab>
                  ))}
                </Tabs>
              </ModalBody>
            </ModalContent>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const languages: { label: string }[] = [
  { label: "TypeScript" },
  { label: "JavaScript" },
  { label: "Python" },
  { label: "PHP" },
  { label: "HTML" },
];
