export function setQueryParameter(key: string, value: string): void {
  const url = new URL(window.location.href);

  url.searchParams.set(key, value);

  window.history.pushState({}, "", url.toString());
}

export function getQueryParameter(key: string): string | null {
  const url = new URL(window.location.href);

  return url.searchParams.get(key);
}

export function deleteQueryParameter(key: string): void {
  const url = new URL(window.location.href);

  url.searchParams.delete(key);

  window.history.pushState({}, "", url.toString());
}
