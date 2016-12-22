import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'search' },
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [],
    exports: []
})
export class AppRoutingModule { }

