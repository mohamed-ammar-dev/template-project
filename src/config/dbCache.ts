import { createClient } from "redis";

class Redis {
  connect() {
    const client = createClient({
      url: process.env.DB_CACHE_URL!,
    });

    console.log("Redis connected...");

    client.connect();

    return client;
  }
}

export const redis = new Redis();
