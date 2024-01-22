export function timer(ms = 0) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function mockFetch<T>(data: T) {
  const resp = {
    json(): Promise<T> {
      return Promise.resolve(data);
    },
  } as Response;
  window.fetch = () => Promise.resolve(resp);
}

export function mockFetchFail() {
  const resp = {
    json(): Promise<void> {
      throw "mock fail";
    },
  } as Response;
  window.fetch = () => Promise.resolve(resp);
}
