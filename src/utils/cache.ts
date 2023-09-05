const cache: { [key: string]: { data: any; timestamp: number } } = {};

export function getFromCache(key: string, expiry: number = 300000) {
  const item = cache[key];
  if (item && Date.now() - item.timestamp < expiry) {
    return item.data;
  }
  return null;
}

export function setCache(key: string, data: any) {
  cache[key] = {
    data: data,
    timestamp: Date.now(),
  };
}
