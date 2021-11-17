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
    path: 'open-fd',
    loadChildren: () => import('./fd/open-fd/open-fd/open-fd.module').then( m => m.OpenFdPageModule)
  },
  {
    path: 'open-rd',
    loadChildren: () => import('./rd/open-rd/open-rd/open-rd.module').then( m => m.OpenRdPageModule)
  },
  {
    path: 'add-minor',
    loadChildren: () => import('./fd/open-fd/add-minor/add-minor/add-minor.module').then( m => m.AddMinorPageModule)
  },
  {
    path: 'add-minor',
    loadChildren: () => import('./rd/open-rd/add-minor/add-minor/add-minor.module').then( m => m.AddMinorPageModule)
  },
  {
    path: 'rd-successful',
    loadChildren: () => import('./rd/open-rd/rd-successful/rd-successful.module').then( m => m.RdSuccessfulPageModule)
  },
  {
    path: 'fd-successful',
    loadChildren: () => import('./fd/open-fd/fd-successful/fd-successful.module').then( m => m.FdSuccessfulPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
