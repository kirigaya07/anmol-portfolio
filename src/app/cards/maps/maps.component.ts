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

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadMapUrl();
    })
  }

  loadMapUrl(): void {
    const cachedUrl = this.mapCacheService.getMapDetails();

    if (cachedUrl) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cachedUrl);
    } else {
      // The URL you want to cache and use
      const url =
        'https://www.google.com/maps/place/Mahasamund,+Chhattisgarh+493445/@21.1128084,82.0846056,14.88z/data=!4m6!3m5!1s0x3a28a58eeaded2a5:0x6a1dc472a931541d!8m2!3d21.1124067!4d82.095962!16zL20vMDg2ZHd3?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D';

      this.mapCacheService.setMapDetails(url);
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}

