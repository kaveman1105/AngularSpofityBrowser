import { NgModule } from '@angular/core';
import { SearchRoutingModule, routedComponents } from './search-routing.module';

@NgModule({
  imports: [
    SearchRoutingModule
  ],
  declarations: [routedComponents],
})
export class SearchModule { }
