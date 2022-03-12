import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayuotComponent} from "./shared/main-layuot/main-layuot.component";

const routes: Routes = [
  {
    path: '', component: MainLayuotComponent, children: [
      {path:'', redirectTo: '/', pathMatch: 'full'},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
