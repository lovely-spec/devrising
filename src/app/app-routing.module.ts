import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/bottom-nav/bottom-nav.module').then( m => m.BottomNavPageModule)
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bottom-nav',
    loadChildren: () => import('./pages/bottom-nav/bottom-nav.module').then( m => m.BottomNavPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/login/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./pages/home/transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'wbbeneficiary',
    loadChildren: () => import('./pages/home/transaction/wbbeneficiary/wbbeneficiary.module').then( m => m.WbbeneficiaryPageModule)
  },
  {
    path: 'otppage',
    loadChildren: () => import('./pages/home/beneficiary/transfer/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'transferpage',
    loadChildren: () => import('./pages/home/beneficiary/transfer/wbtransfer/wbtransfer.module').then( m => m.WbtransferPageModule)
  },
  {
    path: 'beneficiary',
    loadChildren: () => import('./pages/home/beneficiary/beneficiary.module').then( m => m.BeneficiaryPageModule)
  },
  {
    path: 'fullstatement',
    loadChildren: () => import('./pages/home/fd/fullstatement/fullstatement.module').then( m => m.FullstatementPageModule)
  },
  {
    path: 'add-new-member',
    loadChildren: () => import('./pages/home/add-member/add-new-member/add-new-member.module').then( m => m.AddNewMemberPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
  
}
