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

  const allRepos: RepositoryListType = [];

  async function getAllRepositories(
    limit: number,
    selectedLanguage: string = "typescript",
    page: number
  ): Promise<{ repos: RepositoryListType; total_page: number }> {
    const perPage = 100;
    let gitHubPage = 1;

    setIsLoading(true);

    try {
      if (!allRepos.length) {
        while (true) {
          const response = await fetch(`${url}?page=1&per_page=${perPage}`, {
            headers,
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch repositories: ${response.status}`);
          }

          const data = await response.json();

          allRepos.push(...data);

          if (data.length < perPage) {
            break;
          }

          gitHubPage++;
        }
      }

      const repositories = allRepos.filter(
        (item) =>
          item.language &&
          !["HTML", "CSS", "SCSS"].includes(item.language.toUpperCase())
      );

      const filteredRepos = repositories.filter(
        (repo) =>
          repo.language.toLocaleLowerCase() ===
          selectedLanguage.toLocaleLowerCase()
      );

      const start = (page - 1) * limit;
      const end = start + limit;

      const paginatedRepos = filteredRepos.slice(start, end);

      for (const repo of filteredRepos) {
        try {
          const languages = await getLanguages(repo.languages_url);

          repo.languages = languages as string[];
        } catch (err) {
          console.error(`Error fetching languages for repo ${repo.id}:`, err);
          repo.languages = [];
        }
      }

      const repositoriesArr = paginatedRepos.filter(
        (repo) => repo.languages.length > 0
      );

      const total_page = Math.ceil(filteredRepos.length / limit);

      return {
        repos: repositoriesArr?.filter((repo) => repo.languages.length > 0),
        total_page,
      };
    } catch (error) {
      console.error("Error fetching repositories:", error);

      return {
        repos: [],
        total_page: 0,
      };
    } finally {
      setIsLoading(false);
    }
  }

  async function getLanguages(url: string) {
    try {
      setIsLoading(true);
      const response = await fetch(url as string, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();

      const langArr = Object.keys(jsonData).filter((lang) =>
        [
          "PHP",
          "HTML",
          "CSS",
          "Python",
          "Dockerfile",
          "TypeScript",
          "JavaScript",
        ].includes(lang)
      );

      return langArr;
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { getAllRepositories, isLoading };
}
