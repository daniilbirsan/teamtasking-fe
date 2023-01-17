import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterPaths } from "@shared/constants";

const routes: Routes = [
  {
    path: RouterPaths.INTROPAGE.MAIN,
    loadChildren: () =>
      import("./modules/intro-page/intro-page.module").then(
        (m) => m.IntroPageModule
      ),
  },
  {
    path: RouterPaths.DASHBOARD.START,
    loadChildren: () =>
      import("./modules/dashboard/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  { path: "sitemap.xml", redirectTo: "sitemap.xml", pathMatch: "full" },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
