import { Component, OnInit } from '@angular/core';
import { Artist } from '../shared/classes/artist';
import { Album } from '../shared/classes/album';
import { Track } from '../shared/classes/track';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private searchstr: string;
  private artists: Artist[] = [];
  private albums: Album[] = [];
  private tracks: Track[] = [];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  Search() {
    if (this.searchstr.length > 0) {
      this.searchService.searchArtists(this.searchstr)
        .subscribe(res => {
          this.artists = res.artists.items;
          //console.log(this.artists);
        });

      this.searchService.searchAlbums(this.searchstr)
        .subscribe(res => {
          this.albums = res.albums.items;
          //console.log(res.albums.items);
        });
      this.searchService.searchTracks(this.searchstr)
        .subscribe(res => {
          this.tracks = res.tracks.items;
          //console.log(res);
        });
    }
  }
}
