import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapCacheService {

  private readonly cacheKey = 'mapDetailsV3';

  constructor() { }

  getMapDetails(): string | null {
    const cachedData = sessionStorage.getItem(this.cacheKey);
    return cachedData ? JSON.parse(cachedData) : null;
  }

  setMapDetails(data: string): void {
    sessionStorage.setItem(this.cacheKey, JSON.stringify(data));
  }

  clearMapDetails(): void {
    sessionStorage.removeItem(this.cacheKey);
  }
}
