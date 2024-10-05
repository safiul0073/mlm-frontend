export const getFetchInstance = async <T>(
  url: string,
  config: any = {},
): Promise<T> => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...config,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as T;
    })
    .catch((error: Error) => {
      console.error(error);
      throw error;
    });
};
