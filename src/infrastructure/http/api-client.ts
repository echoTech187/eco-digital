/**
 * Base HTTP client configuration.
 * Configure your API base URL and default headers here.
 */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  // Validate endpoint to prevent open redirect or SSRF injection
  if (/^https?:\/\//i.test(endpoint)) {
    throw new Error("Absolute URLs are not permitted in apiClient");
  }

  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${BASE_URL}${cleanEndpoint}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}

