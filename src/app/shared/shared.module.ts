import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ArtistComponent } from './artist.component';
import { AlbumComponent } from './album.component';
import { TrackComponent } from './track.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ]
})
export class SharedModule { }
