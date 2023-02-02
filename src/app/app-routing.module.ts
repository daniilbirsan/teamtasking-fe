import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "@core/guards/auth.guard";
import { RouterPaths } from "@shared/constants";

const routes: Routes = [
  {
    path: RouterPaths.INTROPAGE.MAIN,
    loadChildren: () =>
      import("./modules/intro-page/intro-page.module").then(
        (m) => m.IntroPageModule
      )
  },
  {
    path: RouterPaths.DASHBOARD.START,
    loadChildren: () =>
      import("./modules/dashboard/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
    canActivate: [ AuthGuard ]
  },
  { path: "**", redirectTo: "/dashboard" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
