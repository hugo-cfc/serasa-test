export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  queryParams?: Record<string, string>
) {
  const headers = new Headers(init?.headers || {});

  if (init && init.headers) {
    for (const [key, value] of Object.entries(init.headers)) {
      headers.set(key, value);
    }
  }

  let queryString = "";

  if (queryParams) {
    const queryParamsArray = [];
    for (const [key, value] of Object.entries(queryParams)) {
      queryParamsArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    queryString = `?${queryParamsArray.join("&")}`;
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/api` : "http://localhost:3000/api"}${input}${queryString}`,
    {
      ...init,
      headers,
    }
  );

  if (data.headers.get("method")?.includes("DELETE")) {
    const result = await data;
    return result as T;
  }

  if (!data.ok) {
    const errorData = {
      status: data.status,
      statusText: data.statusText,
    };

    const errorResponse = await data.json();
    throw { error: errorResponse, ...errorData };
  }

  let result;
  try {
    result = await data.json();
  } catch (error) {
    result = await data.status;
  }

  return result as T;
}
