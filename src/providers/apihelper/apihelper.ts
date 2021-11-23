import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserResponse } from '../../providers/Models/UserDetails';
import { RdResponse } from '../../providers/Models/MemberRD';
import { DdResponse } from '../../providers/Models/MemberDD';
import { FdResponse } from '../../providers/Models/MemberFD';
import { OlResponse } from '../../providers/Models/MemberOL';
import { MemberSavingResponse } from '../../providers/Models/MemberSaving';
import { Router } from '@angular/router';


/*
  Generated class for the ApihelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApihelperProvider {
  

  // private RootURL: string = "http://localhost:3000/api/";
  private RootURL: string = "https://staging.devrising.in/api/";
  // private RootURL: string = "https://app.devrising.in/api/";
   loading: any;
   HeaderConfig : any = [];
   Saving: any = [];
   DD: any = [];
   RD: any = []; 
   FD: any = [];
   OL: any = []; 
   DL: any = []; 
   GL: any = []; 
   FL: any = []; 
   PL: any = []; 


  constructor(public http: HttpClient, public router: Router, public alertController: AlertController, private toastCtrl: ToastController, public loadingCtrl : LoadingController, private storage: Storage) {
      
  }
  
  
// toast message


  // user login 
  UserLogin(username:string, password : string){
    
    let postData = new FormData();
    postData.append('username' , username);
    postData.append('password' , password);
    console.log(postData);
    // call Api
   return this.http.post(this.RootURL + 'sign-in',postData);
  }
  // set header values
  SetHeader(token:string,userid:string){
    
    let header = {
          'Authorization': 'Bearer ' + token,
          'user-id': userid,
        }
      this.HeaderConfig =  { headers: new HttpHeaders(header)};
    }
   UserPanel(){
     
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/dashboard',postData,this.HeaderConfig);
    return  data;
  }
  User_details(data){
    let response : UserResponse = [];
    this.FD = data.fixed_deposits;
    this.OL = data.other_loan_accounts;
    this.Saving=  data.saving_accounts;
    let rdDD = data.recurring_deposits;
    let current_member = data.current_member;

    /* All Loan Accounts */
    this.DL = data.deposit_loan_accounts; 
    this.GL = data.gold_loan_accounts; 
    this.FL = data.fixed_loan_accounts; 
    this.PL = data.property_loan_accounts;
    console.log('Property Loan',this.PL)
    rdDD.forEach(element => {
       
      if(element.is_dds == true){
         this.DD.push(element);
      }else{
        this.RD.push(element);
      }
      
      
    })
    // console.log('response', response)
    response = {
      Saving: this.Saving,
      RD: this.RD,
      RDDD: rdDD,
      DD: this.DD,
      FD: this.FD,
      OL: this.OL,
      PL: this.PL,
      GL: this.GL,
      DL: this.DL,
      current_member: current_member
    }
    return response;
  }
//Account Details
MemberRD(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberRD_Details(data){
  let response : RdResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberDD(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberDD_Details(data){
  let response : DdResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}
MemberFD(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberFD_Details(data){
  let response : FdResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberOL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberOL_Details(data){
  let response : OlResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberGL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberGL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberDL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberDL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberRL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberRL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

MemberPL(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberPL_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  }else{
    response = [];
  }
  return response;
}

Loan(type:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  return this.http.post(this.RootURL + 'member/account/passbook',postData,this.HeaderConfig);
}
Loan_Details(data){
  let response : any = [];
  if(data.status==true){
  response = {
    details : data.details,
  }
  }else{
    response = [];
  }
  return response;
}
//Saving Details
MemberSaving(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
MemberSaving_Details(data){
  let response : MemberSavingResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  
  }else{
    response = [];
  }
  return response;
}

//Pasbook_Details
Pasbook_Details(type:string, slug:string){
  let postData = new FormData();
  postData.append('account_type' , type);
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/account',postData,this.HeaderConfig);
}
Pasbook_Details_Details(data){
  let response : MemberSavingResponse = [];
  if(data.status==true){
  response = {
    details : data.details,
    transactions : data.transactions,
  }
  
  }else{
    response = [];
  }
  return response;
}
//End

// Transaction API
BeneficiaryList(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/beneficiary/list',postData,this.HeaderConfig);
}
AddBeneficiary(name,mobile_no,bank_name,ifsc_code,account_no){
  let postData = new FormData();
  postData.append('name' , name);
  postData.append('mobile_no' , mobile_no);
  postData.append('bank_name' , bank_name);
  postData.append('ifsc_code' , ifsc_code);
  postData.append('account_no' , account_no);
  return this.http.post(this.RootURL + 'member/beneficiary/add',postData,this.HeaderConfig);
}
BenDetails(bene_id){
  let postData = new FormData();
  postData.append('bene_id' , bene_id);
  return this.http.post(this.RootURL + 'member/beneficiary/bendetails',postData,this.HeaderConfig);
}
DeleteBene(bene_id){
  let postData = new FormData();
  postData.append('bene_id' , bene_id);
  return this.http.post(this.RootURL + 'member/beneficiary/delete',postData,this.HeaderConfig);
}
TransferMony(bene_acc_no,b_type,beneficiary_id,bank_name,ifsc,name, acc_no, amount){
  let postData = new FormData();
  postData.append('bene_acc_no' , bene_acc_no);
  postData.append('b_type' , b_type);
  postData.append('beneficiary_id' , beneficiary_id);
  postData.append('bank_name' , bank_name);
  postData.append('ifsc' , ifsc);
  postData.append('name' , name);
  postData.append('acc_no' , acc_no);
  postData.append('amount' , amount);
  return this.http.post(this.RootURL + 'member/beneficiary/transfer',postData,this.HeaderConfig);
}
TransactionList(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/transactions/list',postData,this.HeaderConfig);
}
AddWBBeneficiary(name,mobile_no,account_no){
  let postData = new FormData();
  postData.append('name' , name);
  postData.append('mobile_no' , mobile_no);
  postData.append('account_no' , account_no);
  return this.http.post(this.RootURL + 'member/wbbeneficiary/add',postData,this.HeaderConfig);
}
WBBeneficiaryList(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/wbbeneficiary/list',postData,this.HeaderConfig);
}
SendOtp(){
  let postData = new FormData();
  // call Api
  return this.http.post(this.RootURL + 'member/wbbeneficiary/sendotp',postData,this.HeaderConfig);
  }

  ConfirmOtp(bene_acc_no,b_type,beneficiary_id,bank_name,ifsc,name, acc_no,saving_balance, amount,OtpMsg, transaction_type){
    console.log(bene_acc_no,b_type,beneficiary_id,bank_name,ifsc,name, acc_no,saving_balance, amount,OtpMsg, transaction_type)
  let postData = new FormData();
  postData.append('otpmsg' , OtpMsg);
  postData.append('transaction_type' , transaction_type);
  postData.append('from_acc_no' , bene_acc_no);
  postData.append('b_type' , b_type);
  postData.append('beneficiary_id' , beneficiary_id);
  postData.append('bank_name' , bank_name);
  postData.append('ifsc' , ifsc);
  postData.append('name' , name);
  postData.append('to_acc_no' , acc_no);
  postData.append('saving_balance' , saving_balance);
  postData.append('amount' , amount);
  console.log(postData);
  // call Api
  return this.http.post(this.RootURL + 'member/wbbeneficiary/confirm-otp',postData,this.HeaderConfig);
  }
  ResendOtp(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/withinbanktransaction/resendotp',postData,this.HeaderConfig);
  }

  AddPayment(type,slug,amount,from_account,otpmsg){
  let postData = new FormData();
  postData.append('type' , type);
  postData.append('amount' , amount);
  postData.append('slug' , slug);
  postData.append('from_account' , from_account);
  postData.append('otpmsg' , otpmsg);
  return this.http.post(this.RootURL + 'member/withinbanktransaction/verify_transaction',postData,this.HeaderConfig);
  }
  SendTransactionOtp(){
    let postData = new FormData();
  // call Api
  return this.http.post(this.RootURL + 'member/withinbanktransaction/sendotp',postData,this.HeaderConfig);
  }

  RepaymentSchedule(type,slug){
  let postData = new FormData();
  postData.append('slug' , slug);
  return this.http.post(this.RootURL + 'member/accounts/repayment_schedule',postData,this.HeaderConfig);
  }

 

// Forgot Password
ForgotPass(phone,username){
  let postData = new FormData();
  postData.append('username' , username);
  postData.append('phone' , phone);
 return this.http.post(this.RootURL + 'password/forgot',postData);
}

// End Forgot Password

//change Password
ChangePwd(current :string,newpwd : string){
  let postData = new FormData();
  postData.append('current_password' , current);
  postData.append('password' , newpwd);
  postData.append('password_confirmation' , newpwd);
  // call Api
 return this.http.post(this.RootURL + 'password/reset',postData,this.HeaderConfig);

}
//  Account details
AccountsDetails(accountid:string,accounttype:string){
  let postData = new FormData();
  postData.append('account_id' , accountid);
  postData.append('account_type' , accounttype);
  // call Api
 return this.http.post(this.RootURL + 'get-account-data',postData,this.HeaderConfig);
}
Notification(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/notification',postData,this.HeaderConfig);
}
// add member api starts 

// phone no check api
check_no (number){
  let postData = new FormData();
  postData.append('number',number);
  return this.http.post(this.RootURL + 'member/check_no',postData,this.HeaderConfig);
}
// end

// personal details api 
personal_details (first_name:string,Last_name:string,Father_name:string,Husband_wife_name:string,D_O_B:string,Marital_status:string,Occupation:string,Email:string,gender:string){
  let postData = new FormData();
  postData.append('First_name',first_name);
  postData.append('Last_name',Last_name);
  postData.append('Father_name',Father_name);
  postData.append('Husband_wife_name',Husband_wife_name);
  postData.append('D_O_B',D_O_B);
  postData.append('Marital_status',Marital_status);
  postData.append('Occupation',Occupation);
  postData.append('Email',Email);
  postData.append('gender',gender);
  return this.http.post(this.RootURL + 'member/personal_details',postData,this.HeaderConfig);
}
check(panchayt){
  let postData = new FormData();
  postData.append('panchayt',panchayt);
  return this.http.post(this.RootURL + 'member/personal_details',postData,this.HeaderConfig);
}

ClearNotification(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/clear_notification',postData,this.HeaderConfig);
}


 // Save Payment informations
 SavePaymentINformation(accountid:string,accounttype:string,
  transaction_type:string,data:any){
  let postData = new FormData();
  postData.append('account_id' , accountid);
  postData.append('account_type' , accounttype);
  postData.append('transaction_type' , transaction_type);
  // postData.append('daily_transaction_transaction_date' , data.transectiondate);
  postData.append('amount' , data.amount);
  postData.append('message' , data.remarks);
  // postData.append('daily_transaction[payment_mode]' , data.payMode);
  // call Api
 return this.http.post(this.RootURL + 'single-collection-transaction',postData,this.HeaderConfig);
 }

 // collection list by date
 CollectionListByDate(fdate:string){
  let postData = new FormData();
  postData.append('transaction_date_eq' , fdate);
  // call Api
 return this.http.post(this.RootURL + 'daily-collection-transaction',postData,this.HeaderConfig);
 }
 async presentToastWithOptions(Message) {
  
  const toast = await this.toastCtrl.create({
    // header: 'Toast header',
    message: Message,
    position: 'top',
    duration: 3000,
    buttons: [{
        text: 'Done',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }
    ]
  }); 
  toast.present();
}
async presentLoading() {
  const loading = await this.loadingCtrl.create({
    // cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 1300
  });
  await loading.present();
}
async show_alert(msg){
  const alert = await this.alertController.create({
    cssClass: 'error_pop',
    header: 'Error',
    message: msg,
    buttons: [
       {
        text: 'Okay',
        handler: () => {
          // this.router.navigate(['dashboard/home'])
        }
      }
    ]
  });

  await alert.present();
}

async success_alert(msg, route){
  const alert = await this.alertController.create({
    cssClass: 'success_alert',
    header: 'Success',
    message: msg,
    buttons: [
       {
        text: 'Okay',
        handler: () => {
          this.router.navigate([route])
        }
      }
    ]
  });

  await alert.present();
}
async success_alert_with_no_route(msg){
  const alert = await this.alertController.create({
    cssClass: 'success_alert',
    header: 'Success',
    message: msg,
    buttons: [
       {
        text: 'Okay',
        handler: () => {
          
        }
      }
    ]
  });

  await alert.present();
}
}
