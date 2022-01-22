import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomNavPage } from './bottom-nav.page';

const routes: Routes = [
  {
    path: '',
    component: BottomNavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      
      // Routes For Menu Bar
      {
        path: 'profile',
        loadChildren: () => import('../menu/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'cpassword',
        loadChildren: () => import('../menu/cpassword/cpassword.module').then(m => m.CpasswordPageModule)
      },
      {
        path: 'loan',
        loadChildren: () => import('../menu/loan/loan.module').then(m => m.LoanPageModule)
      },
      {
        path: 'passbook',
        loadChildren: () => import('../menu/passbook/passbook.module').then(m => m.PassbookPageModule)
      },
      {
        path: 'security',
        loadChildren: () => import('../menu/security/security.module').then(m => m.SecurityPageModule)
      },
      {
        path: 'support',
        loadChildren: () => import('../menu/support/support.module').then(m => m.SupportPageModule)
      },
      {
        path: 'tandc',
        loadChildren: () => import('../menu/tandc/tandc.module').then(m => m.TandcPageModule)
      },
      {
        path: 'request',
        loadChildren: () => import('../menu/member-requests/member-requests.module').then(m => m.MemberRequestsPageModule)
      },
      {
        path: 'other-requests',
        loadChildren: () => import('../menu/other-requests/other-requests.module').then(m => m.OtherRequestsPageModule)
      },
      
      // End Routes For Menu Bar

      {
        path: 'saving',
        loadChildren: () => import('../home/saving/saving.module').then(m => m.SavingPageModule)
      },
      {
        path: 'ol',
        loadChildren: () => import('../home/ol/ol.module').then(m => m.OlPageModule)
      },
      {
        path: 'rl',
        loadChildren: () => import('../home/rl/rl.module').then( m => m.RlPageModule)
      },
      {
        path: 'dl',
        loadChildren: () => import('../home/dl/dl.module').then( m => m.DlPageModule)
      },
      {
        path: 'pl',
        loadChildren: () => import('../home/pl/pl.module').then( m => m.PlPageModule)
      },
      {
        path: 'gl',
        loadChildren: () => import('../home/gl/gl.module').then( m => m.GlPageModule)
      },
      {
        path: 'dd/ddview',
        loadChildren: () => import('../home/dd/ddview/ddview.module').then(m => m.DdviewPageModule)
      },
      {
        path: 'fd/fdview',
        loadChildren: () => import('../home/fd/fdview/fdview.module').then(m => m.FdviewPageModule)
      },
      {
        path: 'rd/rdview',
        loadChildren: () => import('../home/rd/rdview/rdview.module').then(m => m.RdviewPageModule)
      },
      {
        path: '/',
        redirectTo: 'home'
      },
      {
        path: 'transaction',
        loadChildren: () => import('../home/transaction/transaction.module').then( m => m.TransactionPageModule)
      },
      {
        path: 'beneficiary',
        loadChildren: () => import('../home/beneficiary/beneficiary.module').then( m => m.BeneficiaryPageModule)
      },
      {
        path: 'add-beneficiary',
        loadChildren: () => import('../home/beneficiary/add-beneficiary/add-beneficiary.module').then( m => m.AddBeneficiaryPageModule)
      },
      {
        path: 'bank-name',
        loadChildren: () => import('../home/beneficiary/add-beneficiary/bank-name/bank-name.page').then( m => m.BankNamePage)
      },
      {
        path: 'detailsview',
        loadChildren: () => import('../home/beneficiary/detailsview/detailsview.module').then( m => m.DetailsviewPageModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('../home/beneficiary/transfer/transfer.module').then( m => m.TransferPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('../menu/transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path: 'wbbeneficiary',
        loadChildren: () => import('../home/transaction/wbbeneficiary/wbbeneficiary.module').then( m => m.WbbeneficiaryPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../home/transaction/wbbeneficiary/add/add.module').then( m => m.AddPageModule)
      },
      {
        path: 'verifyotp',
        loadChildren: () => import('../home/beneficiary/transfer/otp/otp.module').then( m => m.OtpPageModule)
      },
      {
        path: 'wbtransfer',
        loadChildren: () => import('../home/beneficiary/transfer/wbtransfer/wbtransfer.module').then( m => m.WbtransferPageModule)
      },
      {
        path: 'rdaddpayment',
        loadChildren: () => import('../home/rd/rdview/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
      },
      {
        path: 'oladdpayment',
        loadChildren: () => import('../home/ol/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
      },
      {
        path: 'gladdpayment',
        loadChildren: () => import('../home/gl/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
      },
      {
        path: 'dladdpayment',
        loadChildren: () => import('../home/dl/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
      },
      {
        path: 'pladdpayment',
        loadChildren: () => import('../home/pl/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
      },
      {
        path: 'ddaddpayment',
        loadChildren: () => import('../home/dd/ddview/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
      },
      {
        path: 'otppage',
        loadChildren: () => import('../home/otppage/otppage.module').then( m => m.OtppagePageModule)
      },
      {
        path: 'repayment-schedule',
        loadChildren: () => import('../home/repayment-schedule/repayment-schedule.module').then( m => m.RepaymentSchedulePageModule)
      }
    ]
  },
  {
    path: '/',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomNavPageRoutingModule {}
