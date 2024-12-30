import { useEffect, useState } from "react";

export default function useLanguages(url?: string) {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
  };
  const [languages, setLanguages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getLanguages() {
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

      setLanguages(langArr);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getLanguages();
  }, [url]);

  return { languages, isLoading };
}
