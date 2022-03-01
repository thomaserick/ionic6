import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/componentes/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./pages/componentes/button/button.module').then(
        (m) => m.ButtonPageModule
      ),
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/componentes/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/componentes/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/componentes/tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./pages/componentes/js/js.module').then( m => m.JsPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/native/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./pages/native/flash/flash.module').then( m => m.FlashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
