import { NgModule } from '@angular/core';
import { SearchRoutingModule, routedComponents } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
