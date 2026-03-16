import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;
  mapLoaded = false;
  mapFailed = false;
  readonly fallbackExternalUrl =
    'https://www.google.com/maps?q=Bengaluru,+Karnataka';
  private readonly fallbackEmbedUrl =
    'https://www.openstreetmap.org/export/embed.html?bbox=77.54%2C12.94%2C77.63%2C13.00&marker=12.9716%2C77.5946';

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadMapUrl();
  }

  loadMapUrl(): void {
    const cachedUrl = this.mapCacheService.getMapDetails();
    this.mapLoaded = false;
    this.mapFailed = false;

    if (cachedUrl && this.isEmbeddableMapUrl(cachedUrl)) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cachedUrl);
    } else {
      this.mapCacheService.setMapDetails(this.fallbackEmbedUrl);
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fallbackEmbedUrl);
    }
  }

  private isEmbeddableMapUrl(url: string): boolean {
    return url.includes('output=embed') || url.includes('/maps/embed') || url.includes('openstreetmap.org/export/embed.html');
  }

  onMapLoad(): void {
    this.mapLoaded = true;
    this.mapFailed = false;
  }

  onMapError(): void {
    this.mapLoaded = false;
    this.mapFailed = true;
  }
}

