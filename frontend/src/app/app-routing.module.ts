import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'drinkdetails/:id',
    loadChildren: () => import('./pages/drinkdetails/drinkdetails.module').then( m => m.DrinkdetailsPageModule)
  },
  {
    path: 'drinkupdate/:id',
    loadChildren: () => import('./pages/drinkupdate/drinkupdate.module').then( m => m.DrinkupdatePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
