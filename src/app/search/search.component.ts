import { Component, OnInit } from '@angular/core';
import { Artist } from '../shared/classes/artist';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private searchstr: string;
  private artists: Artist[] = [];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  Search() {
    console.log(this.searchstr.length);
    if (this.searchstr.length > 0) {
      this.searchService.searchMusic(this.searchstr)
        .subscribe(res => this.artists = res.artists.items);
    }
  }
}
