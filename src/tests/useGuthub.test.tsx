import { renderHook, act } from "@testing-library/react";

import useGithub from "../hooks/useGithub";
// import { RepositoryListType } from "@/types/index";
import { mockFetch } from "../data/__mocks__/fetchMock";
import { mockRepositories } from "../data/__mocks__/mockData";

describe("useGithub", () => {
  it("fetch and filters repositories correctly", async () => {
    mockFetch(mockRepositories);

    const { result } = renderHook(() => useGithub());

    await act(async () => {
      const { repos, total_page, total_items } =
        await result.current.getAllRepositories(10, "typescript", 1, "");

      expect(repos).toHaveLength(1); // Only one repo matches the language "typescript".
      expect(total_page).toBe(1);
      expect(total_items).toBe(1);
    });
  });

  // beforeEach(() => {
  //     fetchMock.resetMocks();
  // });

  // it('should fetch all repositories', async () => {
  //     const mockRepos: RepositoryListType = [
  //         { id: 1, name: 'repo1', language: 'typescript', languages_url: '', languages: [], description: 'desc1' },
  //         { id: 2, name: 'repo2', language: 'javascript', languages_url: '', languages: [], description: 'desc2' },
  //     ];

  //     fetchMock.mockResponseOnce(JSON.stringify(mockRepos));

  //     const { result } = renderHook(() => useGithub());

  //     await act(async () => {
  //         const response = await result.current.getAllRepositories(10, 'typescript', 1, '');
  //         expect(response.repos.length).toBe(1);
  //         expect(response.repos[0].name).toBe('repo1');
  //     });
  // });

  // it('should handle fetch error', async () => {
  //     fetchMock.mockReject(new Error('Failed to fetch'));

  //     const { result } = renderHook(() => useGithub());

  //     await act(async () => {
  //         const response = await result.current.getAllRepositories(10, 'typescript', 1, '');
  //         expect(response.repos.length).toBe(0);
  //         expect(response.total_page).toBe(0);
  //         expect(response.total_items).toBe(0);
  //     });
  // });

  // it('should filter repositories by language and search term', async () => {
  //     const mockRepos: RepositoryListType = [
  //         { id: 1, name: 'repo1', language: 'typescript', languages_url: '', languages: ['typescript'], description: 'desc1' },
  //         { id: 2, name: 'repo2', language: 'javascript', languages_url: '', languages: ['javascript'], description: 'desc2' },
  //     ];

  //     fetchMock.mockResponseOnce(JSON.stringify(mockRepos));

  //     const { result } = renderHook(() => useGithub());

  //     await act(async () => {
  //         const response = await result.current.getAllRepositories(10, 'typescript', 1, 'repo1');
  //         expect(response.repos.length).toBe(1);
  //         expect(response.repos[0].name).toBe('repo1');
  //     });
  // });

  // it('should paginate repositories', async () => {
  //     const mockRepos: RepositoryListType = Array.from({ length: 30 }, (_, i) => ({
  //         id: i + 1,
  //         name: `repo${i + 1}`,
  //         language: 'typescript',
  //         languages_url: '',
  //         languages: ['typescript'],
  //         description: `desc${i + 1}`,
  //     }));

  //     fetchMock.mockResponseOnce(JSON.stringify(mockRepos));

  //     const { result } = renderHook(() => useGithub());

  //     await act(async () => {
  //         const response = await result.current.getAllRepositories(10, 'typescript', 2, '');
  //         expect(response.repos.length).toBe(10);
  //         expect(response.repos[0].name).toBe('repo11');
  //     });
  // });
});
