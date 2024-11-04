class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  put(key, value) {
    this.cache.delete(key);

    if (this.cache.size == this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }

  get(key) {
    if (!this.cache.has(key)) return undefined;

    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  getLeastRecent() {
    return this.cache.keys().next().value;
  }

  getMostRecentlyUsed() {
    return Array.from(this.cache)[this.cache.size - 1];
  }
}
