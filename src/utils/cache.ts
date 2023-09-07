export const CACHE_NAME = 'my-cache';

export const setCache = async (key: string, data: any, expiry: number = 300000) => {
  const cache = await caches.open(CACHE_NAME);
  const timestamp = Date.now() + expiry;
  cache.put(key, new Response(JSON.stringify({ data, timestamp })));
};

export const getFromCache = async (key: string) => {
  const cache = await caches.open(CACHE_NAME);
  const response = await cache.match(key);

  if (response) {
    const { data, timestamp } = await response.json();
    if (Date.now() < timestamp) {
      return data;
    } else {
      cache.delete(key);
    }
  }

  return null;
};
