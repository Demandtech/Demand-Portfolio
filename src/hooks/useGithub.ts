import { useState } from "react";

import { RepositoryListType } from "@/types/index";

export default function useGithub() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const url = "https://api.github.com/user/repos";
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [allRepos, setAllRepos] = useState<RepositoryListType>([]);

  async function fetchAllRepositories(
    perPage: number,
  ): Promise<RepositoryListType> {
    let allFetchedRepos: RepositoryListType = [];
    let gitHubPage = 1;

    while (true) {
      const response = await fetch(
        `${url}?page=${gitHubPage}&per_page=${perPage}`,
        { headers },
      );

      if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

      const data = await response.json();

      allFetchedRepos.push(...data);

      if (data.length < perPage) break;
      gitHubPage++;
    }

    const usefulData = allFetchedRepos.filter((item) => {
      return !["css", "scss"].includes(item?.language?.toLowerCase());
    });

    return usefulData;
  }

  function filterRepositories(
    repos: RepositoryListType,
    language: string,
    search: string,
  ): RepositoryListType {
    return repos.filter(
      (repo) =>
        repo.language?.toLowerCase() === language.toLowerCase() &&
        repo.languages.length > 0 &&
        repo.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  function paginateRepositories(
    repos: RepositoryListType,
    limit: number,
    page: number,
  ) {
    const start = (page - 1) * limit;
    const end = start + limit;

    return repos.slice(start, end);
  }

  function sortRepositories(repos: RepositoryListType): RepositoryListType {
    if (!repos) return [];

    return repos.sort((a, b) => {
      const hasDescriptionA = Boolean(a.description);
      const hasDescriptionB = Boolean(b.description);

      if (hasDescriptionA === hasDescriptionB) {
        return 0;
      }

      return hasDescriptionA ? -1 : 1;
    });
  }

  async function fetchRepositoriesLanguages(
    repos: RepositoryListType,
  ): Promise<RepositoryListType> {
    return await Promise.all(
      repos.map(async (repo) => {
        try {
          const response = await fetch(repo.languages_url, { headers });

          if (!response.ok) {
            repo.languages = [];
          } else {
            const languages = await response.json();

            repo.languages = Object.keys(languages).filter((lang) =>
              [
                "typescript",
                "javascript",
                "python",
                "php",
                "css",
                "scss",
                "dockerfile",
                "html",
              ].includes(lang.toLowerCase()),
            );
          }
        } catch (error: any) {
          console.log(error.message);
          repo.languages = [];
        }

        return repo;
      }),
    );
  }

  async function getAllRepositories(
    limit: number,
    selectedLanguage: string = "typescript",
    page: number,
    search: string,
  ): Promise<{
    repos: RepositoryListType;
    total_page: number;
    total_items: number;
  }> {
    if (!selectedLanguage) return { repos: [], total_page: 0, total_items: 0 };

    setIsLoading(true);

    try {
      let repositories = allRepos;

      if (allRepos.length < 1) {
        const allFetchedRepos = await fetchAllRepositories(100);
        const enrichedRepos = await fetchRepositoriesLanguages(allFetchedRepos);

        const validRepositories = enrichedRepos.filter(
          (repo) => repo.languages.length > 0,
        );

        const sortedRepos = sortRepositories(validRepositories);

        repositories = sortedRepos;
        setAllRepos(sortedRepos);
      }

      const filteredRepos = filterRepositories(
        repositories,
        selectedLanguage,
        search,
      );
      const paginatedRepos = paginateRepositories(filteredRepos, limit, page);

      return {
        repos: paginatedRepos,
        total_page: Math.ceil(filteredRepos.length / limit),
        total_items: filteredRepos.length,
      };
    } catch (error) {
      console.error("Error fetching repositories:", error);

      return { repos: [], total_page: 0, total_items: 0 };
    } finally {
      setIsLoading(false);
    }
  }

  return { getAllRepositories, isLoading };
}
