import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  private searchUrl: string;
  private artistLimit: string = '10';
  private albumLimit: string = '4';
  private trackLimit: string = '8';

  constructor(
    private http: Http
  ) { }

  searchSpotify(str: string, type: string, limit: string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=' + limit + '&type=' + type + '&market=US';
    return this.http.get(this.searchUrl)
      .map(res => res.json());
  }

  searchArtists(str: string) {
    return this.searchSpotify(str, 'artist', this.artistLimit);
  }
  searchAlbums(str: string) {
    return this.searchSpotify(str, 'album', this.albumLimit);
  }
  searchTracks(str: string) {
    return this.searchSpotify(str, 'track', this.trackLimit);
  }
}
