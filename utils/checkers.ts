export const isValidUrl = (url: string) =>
  ["http://", "https://"].some((word) => url.includes(word));
