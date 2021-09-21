import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'series', loadChildren: './series/series.module#SeriesPageModule' },
  { path: 'pagina-serie', loadChildren: './pagina-serie/pagina-serie.module#PaginaSeriePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
