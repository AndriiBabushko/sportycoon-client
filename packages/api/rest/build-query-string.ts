export function buildQueryString(
  baseUrl: string,
  params: Record<string, string | number | null> | null
): string {
  if (!params) return baseUrl;

  if (!Object.values(params).filter((el) => el).length) return baseUrl;

  const queryParams = Object.entries(params).map(([key, value]) => {
    if (key === "sort") {
      return value;
    }
    return Array.isArray(value)
      ? value.reduce((acc, el) => {
          return `${acc}${encodeURIComponent(key)}[]=${encodeURIComponent(
            el
          )}&`;
        }, "")
      : value && `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });

  const queryString =
    queryParams.length > 0
      ? `?${queryParams.filter((el) => Boolean(el)).join("&")}`
      : "";

  return `${baseUrl}${queryString}`;
}
