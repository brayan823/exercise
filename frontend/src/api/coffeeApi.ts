const fetchApi = async (method: string, url: string, body: any = null) => {
  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: !!body ? JSON.stringify(body) : body,
  };

  const response = await fetch(url, config);

  return await response.json();
};

export default fetchApi;
