import { Component } from '@angular/core';
import { KeralaPageComponent } from './pages/kerala-page/kerala-page.component';
import { Routes } from '@angular/router';
import { DuNameComponent } from './pages/du-name/du-name.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path:'keralaPage',component: KeralaPageComponent
  },
  {
    path:'du',component: DuNameComponent
  },
  {
    path:'resume',component: PortfolioComponent
  }
];
