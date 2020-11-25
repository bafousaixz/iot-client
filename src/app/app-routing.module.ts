import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  {
    path: '', 
    redirectTo: '/auth', 
    pathMatch: 'full', 
  },

  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'iot',
    loadChildren: () => import('./show/show.module').then(m => m.ShowModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },

  { 
    path: '**',
    redirectTo: '/notfound' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
