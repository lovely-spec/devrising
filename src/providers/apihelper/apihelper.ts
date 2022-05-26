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
  // private RootURL: string = "https://staging.devrising.in/api/";
  private RootURL: string = "https://app.devrising.in/api/";
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
   schemes: any = [];
   trans: any = [];
   rdschemes: any = [];
   rqd: any = [];
   rdreq: any = [];
   fdreq: any = [];
   minors: any = [];


  constructor(public http: HttpClient, public router: Router, public alertController: AlertController, private toastCtrl: ToastController, public loadingCtrl : LoadingController, private storage: Storage) {
      
  }
  
  
// toast message


  // user login 
  UserLogin(username:string, password : string){
    
    let postData = new FormData();
    postData.append('username' , username);
    postData.append('password' , password);
    postData.append('type' , 'member');
    postData.append('login_type' , 'member_id');
    console.log(postData);
    // call Api
   return this.http.post(this.RootURL + 'sign-in',postData);
  }
  UserLoginOtp(mobile_no:string){
    console.log('bubh')
    let postData = new FormData();
    postData.append('mobile_no' , mobile_no);
    postData.append('type' , 'member');
    postData.append('login_type' , 'otp');
    // call Api
   return this.http.post(this.RootURL + 'member/login-otp',postData);
  }
  // set header values
  SetHeader(token:string,userid:string){
    
    let header = {
          'Authorization': 'Bearer ' + token,
          'user-id': userid,
        }
        // console.log('hun check kri',token)
      this.HeaderConfig =  { headers: new HttpHeaders(header)};
    }
   UserPanel(){
     
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/dashboard',postData,this.HeaderConfig);
    return  data;
  }
  bank_details(){
     
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/bank-details',postData,this.HeaderConfig);
    return  data;
  }
  recent_rd(){
     
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/recent_rd',postData,this.HeaderConfig);
    return  data;
  }
  recent_fd(){
     
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/recent_fd',postData,this.HeaderConfig);
    return  data;
  }
  verify_otp(otpmsg,mobile_no){
     
    let postData = new FormData();
    postData.append('otpmsg' , otpmsg);
    postData.append('mobile_no' , mobile_no);
    return this.http.post(this.RootURL + 'member/verify_otp',postData);
  }
  fd_schemes(){
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/fd_schemes',postData,this.HeaderConfig);
    return  data;

  }
  scheme_details(data){
    this.schemes = data.details;
    return this.schemes;
  }
  rd_schemes(){
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/rdschemes',postData,this.HeaderConfig);
    return  data;

  }
  rd_scheme_details(data){
    this.rdschemes = data.details;
    return this.rdschemes;
  }
  rq(){
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/rq',postData,this.HeaderConfig);
    return  data;

  }
  rq_details(data){
    this.rqd = data.details;
    return this.rqd;
  }
  rdre(){
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/rdreq',postData,this.HeaderConfig);
    return  data;

  }
  rdre_details(data){
    this.rdreq = data.details;
    return this.rdreq;
  }
  fdre(){
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/fdreq',postData,this.HeaderConfig);
    return  data;

  }
  fdre_details(data){
    this.fdreq = data.details;
    return this.fdreq;
  }
newmember(id){
  let postData = new FormData();
  postData.append('id' , id);
    let data =this.http.post(this.RootURL + 'member/newmember',postData,this.HeaderConfig);
    return  data;
}
contact(id){
  let postData = new FormData();
  postData.append('id' , id);
    let data =this.http.post(this.RootURL + 'member/contact',postData,this.HeaderConfig);
    return  data;
}
  minor(){
    let postData = new FormData();
    let data =this.http.post(this.RootURL + 'member/minors',postData,this.HeaderConfig);
    return  data;
  }
  minor_details(data){
    this.minors = data.details;
    return this.minors;
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
check_saving(mobile_no){
  let postData = new FormData();
  
  postData.append('mobile_no' , mobile_no);
  
  return this.http.post(this.RootURL + 'member/checksaving',postData,this.HeaderConfig);
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
creditreq(){
  let postData = new FormData();
  return this.http.post(this.RootURL + 'member/creditreq',postData,this.HeaderConfig);
}
// add member api starts 

// phone no check api
check_no (number){
  let postData = new FormData();
  postData.append('number',number);
  return this.http.post(this.RootURL + 'member/check_no',postData,this.HeaderConfig);
}
// end
// create rd
createrd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving_id){
  let postData = new FormData();
  postData.append('scheme',scheme);
  postData.append('amount',amount);
  postData.append('is_nominee',is_nominee);
  postData.append('is_minor',is_minor);
  postData.append('is_saving',is_saving);
  postData.append('nominee_type',nominee_type);
  postData.append('n_name',n_name);
  postData.append('rel_nomineee',rel_nomineee);
  postData.append('a_nominee',a_nominee);
  postData.append('minor_id',minor_id);
  postData.append('saving_id',saving_id);
  return this.http.post(this.RootURL + 'member/createrd',postData,this.HeaderConfig);
}

//end rd

//creat fd
createfd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving,joint,jac,senior){
  let postData = new FormData();
  postData.append('scheme',scheme);
  postData.append('amount',amount);
  postData.append('is_nominee',is_nominee);
  postData.append('is_minor',is_minor);
  postData.append('is_saving',is_saving);
  postData.append('nominee_type',nominee_type);
  postData.append('n_name',n_name);
  postData.append('rel_nomineee',rel_nomineee);
  postData.append('a_nominee',a_nominee);
  postData.append('minor_id',minor_id);
  postData.append('saving',saving);
  postData.append('joint',joint);
  postData.append('jac',jac);
  postData.append('senior',senior);
  return this.http.post(this.RootURL + 'member/createfd',postData,this.HeaderConfig);
}

// end fd
// transection start
transec(member_id:string,saving_account_id:string,payment_mode:string,amount:string){
  let postData = new FormData();
  postData.append('member_id',member_id);
  postData.append('saving_account_id',saving_account_id);
  postData.append('payment_mode',payment_mode);
  postData.append('amount',amount);
  return this.http.post(this.RootURL + 'member/trans',postData,this.HeaderConfig);
  
}
// end transection 

utrno(slug:string,utr_no:string,){
  let postData = new FormData();
  postData.append('slug',slug);
  postData.append('utr_no',utr_no);
  return this.http.post(this.RootURL + 'member/utr',postData,this.HeaderConfig);
}

// personal details api 
add_new_member (number:string,first_name:string,Last_name:string,Father_name:string,Husband_wife_name:string,D_O_B:string,Marital_status:string,Occupation:string,Email:string,gender:string,title:string,
  village_house_town:string,
  p_o:string,
  panchayat:string,
  tehsil:string,
  distt:string,
  pin:string,
  P_village_house_town:string,
  P_p_o:string,
  P_panchayat:string,
  P_tehsil:string,
  P_distt:string,
  P_pin:string,
  addhar_no:string,
  pan_no:string,
  nominee_name:string,
  nominee_f_name:string,
  nominee_relation:string,
  nominee_number:string,
  nominee_address:string,
  nominee_aadhar:string,member_no,nominee_pan,P_state){
  let postData = new FormData();
  // personal details
  postData.append('number',number);
  postData.append('First_name',first_name);
  postData.append('Last_name',Last_name);
  postData.append('Father_name',Father_name);
  postData.append('Husband_wife_name',Husband_wife_name);
  postData.append('D_O_B',D_O_B);
  postData.append('Marital_status',Marital_status);
  postData.append('Occupation',Occupation);
  postData.append('Email',Email);
  postData.append('gender',gender);
  postData.append('title',title);
  // address details 
  postData.append('village_house_town',village_house_town);
  postData.append('p_o',p_o);
  postData.append('panchayat',panchayat);
  postData.append('tehsil',tehsil);
  postData.append('distt',distt);
  postData.append('pin',pin);
  postData.append('P_village_house_town',P_village_house_town);
  postData.append('P_p_o',P_p_o); 
  postData.append('P_panchayat',P_panchayat);
  postData.append('P_tehsil',P_tehsil);
  postData.append('P_distt',P_distt);
  postData.append('P_pin',P_pin);
  postData.append('P_state',P_state);

  // kyc details

  postData.append('addhar_no',addhar_no);
  postData.append('pan_no',pan_no);
  postData.append('nominee_name',nominee_name);
  postData.append('nominee_f_name',nominee_f_name);
  postData.append('nominee_relation',nominee_relation);
  postData.append('nominee_number',nominee_number);  
  postData.append('nominee_address',nominee_address); 
  postData.append('nominee_aadhar',nominee_aadhar); 
  postData.append('nominee_pan',nominee_pan); 
  postData.append('member_no',member_no); 
   
  return this.http.post(this.RootURL + 'member/addmember',postData,this.HeaderConfig);
}
// edit member
editm(id){
  let postData = new FormData();
  postData.append('id',id);
  return this.http.post(this.RootURL + 'member/editmember',postData,this.HeaderConfig);
}
save_edit_member (id,first_name:string,Last_name:string,Father_name:string,Husband_wife_name:string,D_O_B:string,Marital_status:string,Occupation:string,Email:string,gender:string,title:string,
  village_house_town:string,
  p_o:string,
  panchayat:string,
  tehsil:string,
  distt:string,
  pin:string,
  P_village_house_town:string,
  P_p_o:string,
  P_panchayat:string,
  P_tehsil:string,
  P_distt:string,
  P_pin:string,
  addhar_no:string,
  pan_no:string,
  nominee_name:string,
  nominee_f_name:string,
  nominee_relation:string,
  nominee_number:string,
  nominee_address:string,
  nominee_aadhar:string,member_no,nominee_pan,P_state){
  let postData = new FormData();
  // personal details
  postData.append('id',id);
  postData.append('First_name',first_name);
  postData.append('Last_name',Last_name);
  postData.append('Father_name',Father_name);
  postData.append('Husband_wife_name',Husband_wife_name);
  postData.append('D_O_B',D_O_B);
  postData.append('Marital_status',Marital_status);
  postData.append('Occupation',Occupation);
  postData.append('Email',Email);
  postData.append('gender',gender);
  postData.append('title',title);
  // address details 
  postData.append('village_house_town',village_house_town);
  postData.append('p_o',p_o);
  postData.append('panchayat',panchayat);
  postData.append('tehsil',tehsil);
  postData.append('distt',distt);
  postData.append('pin',pin);
  postData.append('P_village_house_town',P_village_house_town);
  postData.append('P_p_o',P_p_o); 
  postData.append('P_panchayat',P_panchayat);
  postData.append('P_tehsil',P_tehsil);
  postData.append('P_distt',P_distt);
  postData.append('P_pin',P_pin);
  postData.append('P_state',P_state);

  // kyc details

  postData.append('addhar_no',addhar_no);
  postData.append('pan_no',pan_no);
  postData.append('nominee_name',nominee_name);
  postData.append('nominee_f_name',nominee_f_name);
  postData.append('nominee_relation',nominee_relation);
  postData.append('nominee_number',nominee_number);  
  postData.append('nominee_address',nominee_address); 
  postData.append('nominee_aadhar',nominee_aadhar); 
  postData.append('nominee_pan',nominee_pan); 
  postData.append('member_no',member_no); 
  // console.log('responsed',id,first_name,Last_name,Father_name,Husband_wife_name,D_O_B,Marital_status,Occupation,Email,gender,title,village_house_town,p_o,panchayat,tehsil,distt,pin,P_village_house_town,P_p_o,P_panchayat,P_tehsil,P_distt,P_pin,addhar_no,pan_no,nominee_name,nominee_f_name,nominee_relation,nominee_number,nominee_address,nominee_aadhar,member_no,nominee_pan,P_state)
  console.log(Email)
   
  return this.http.post(this.RootURL + 'member/saveeditmember',postData,this.HeaderConfig);
}

add_minor(father_name:string,
  first_name:string,
  last_name:string,
  d_o_b:string,
  gender:string,
  address:string,
  tittle:string,
  aadhar_no:string){
    let postData = new FormData()

  
  postData.append('first_name',first_name);
  postData.append('last_name',last_name);
  postData.append('father_name',father_name);
  postData.append('d_o_b',d_o_b);
  postData.append('address',address);
  postData.append('aadhar_no',aadhar_no);
  postData.append('gender',gender);
  postData.append('tittle',tittle);
  return this.http.post(this.RootURL + 'member/addminor',postData,this.HeaderConfig);
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

 // Save Member Images
 uploadImages(formData:FormData,member_id:any){
  // let postData = new FormData();
  let postData = formData;
  postData.append('member_id' , member_id);
  // call Api
 return this.http.post(this.RootURL + 'member/save-member-docs',postData,this.HeaderConfig);
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
