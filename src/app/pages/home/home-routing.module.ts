// tablinks-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'saving',
    loadChildren: () => import('./saving/saving.module').then( m => m.SavingPageModule)
  },
  
  {
    path: 'ol',
    loadChildren: () => import('./ol/ol.module').then( m => m.OlPageModule)
  },
  
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'otppage',
    loadChildren: () => import('./otppage/otppage.module').then( m => m.OtppagePageModule)
  },
  {
    path: 'repayment-schedule',
    loadChildren: () => import('./repayment-schedule/repayment-schedule.module').then( m => m.RepaymentSchedulePageModule)
  },
  {
    path: 'rdview',
    loadChildren: () => import('./rd/rdview/rdview.module').then( m => m.RdviewPageModule)
  },
  {
    path: 'fdview',
    loadChildren: () => import('./fd/fdview/fdview.module').then( m => m.FdviewPageModule)
  },
  {
    path: 'fullstatement',
    loadChildren: () => import('./rd/fullstatement/fullstatement.module').then( m => m.FullstatementPageModule)
  },
  {
    path: 'fullstatement',
    loadChildren: () => import('./fd/fullstatement/fullstatement.module').then( m => m.FullstatementPageModule)
  },
  {
    path: 'add-member',
    loadChildren: () => import('./add-member/add-member.module').then( m => m.AddMemberPageModule)
  },
  {
    path: 'quick-links',
    loadChildren: () => import('./quick-links/quick-links.module').then( m => m.QuickLinksPageModule)
  },
  {
    path: 'add-minor',
    loadChildren: () => import('./add-minor/add-minor.module').then( m => m.AddMinorPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
