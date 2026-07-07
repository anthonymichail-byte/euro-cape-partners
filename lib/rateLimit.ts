type Bucket = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

// Simple in-memory limiter, scoped to a single serverless instance. Good
// enough to blunt casual spam/bots on a low-traffic marketing site; it is
// not a substitute for a shared store (e.g. Vercel KV) if traffic grows or
// the form becomes a bigger spam target, since each cold instance starts
// with an empty map.
const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { allowed: true };
}

// Opportunistic cleanup so the map doesn't grow unbounded on a long-lived instance.
function pruneExpired() {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

setInterval(pruneExpired, WINDOW_MS).unref?.();
