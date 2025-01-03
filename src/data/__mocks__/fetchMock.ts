global.fetch = jest.fn();

export function mockFetch(data: any, status = 200) {
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(data),
    }),
  );
}
