import { Component, OnInit } from '@angular/core';
import { AddBeneficiaryPage } from '../add-beneficiary.page';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bank-name',
  templateUrl: './bank-name.page.html',
  styleUrls: ['./bank-name.page.scss'],
})
export class BankNamePage  {
  list_original = ['State Bank of India','Punjab National Bank - Retail Banking','HDFC Bank','ICICI Bank','Punjab National Bank - Corporate Banking','IndusInd Bank','Punjab  Sind Bank','Allahabad Bank','Allahabad U.P Gramin Bank','AU Small Finance Bank','Andhra Bank','Axis Bank','Bank of Bahrain and Kuwait','Bank of Baroda - Corporate Banking','Bank of Baroda - Retail Banking','Bank of Baroda','Bank of India','Bank of Maharashtra','Canara Bank','Central Bank of India','City Union Bank','Corporation Bank','Deutsche Bank','Development Credit Bank','Dena Bank','Dhanlaxmi Bank','District Cooperative Bank','Federal Bank','valueBI Bank','Indian Bank','Indian Overseas Bank','Jammu and Kashmir Bank','Karnataka Bank Ltd','Karur Vysya Bank','Kerala Gramin Bank','Kotak Bank','Lakshmi Vilas Bank','Oriental Bank of Commerce','Madhyanchal Gramin Bank','Shamrao Vitthal Co-operative Bank','South Indian Bank',
  'State Bank of Bikaner  Jaipur','State Bank of Hyderabad','State Bank of Mysore','State Bank of Patiala','State Bank of Travancore','Syndicate Bank','Tamilnad Mercantile Bank Ltd.','UCO Bank','Union Bank of India','United Bank of India','Vijaya Bank','Yes Bank Ltd','Bandhan Bank','valueFC Bank','valueFC First Bank','Lakshmi Vilas Bank','Nainital Bank','RBL Bank','Goa State Coop Bank Ltd','Steroptionng Urban Co-operative Bank Ltd','Jana Small Finance Bank','Ratnagiri District Central Co-operative Bank Ltd.','Ujjivan Small Finance Bank','Bombay Merchantile Bank','Samarth Sahakari Bank optionmited','Lokmangal Co-Operative Bank optionmited','Vvalueyanand Co-Operative Bank optionmited','Solapur Janata Sahakari Bank Ltd','Post Office Saving Bank','Maharashtra Gramin Bank','Svaluedheshwar Urban Co-Operative Bank','Saraswat Bank','Shri Ganesh Sahakari Bank Ltd','Rajasthan Marudhara Gramin Bank','Equitas Small Finance Bank','Panchmahal District Co-operative Bank','Baroda Gujarat Gramin Bank','Citi Bank','Uttarakhand Gramin Bank','ESAF Small Finance Bank','The Delhi State Cooperative Bank Ltd','Punjab  Maharashtra Cooperative Bank Ltd.','Ambarnath Jai Hind Cooperative Bank optionmited','Fincare Small Finance Bank','Suryoday Small Finance Bank optionmited','Utkarsh Small Finance Bank','Capital Small Finance Bank','North East Small Finance Bank','Seva Vikas Co-Operative Bank Ltd.','The Akola Janata Commercial Co-operative Bank Ltd.','Andhra Pradesh Grameena Vikas Bank','Andhra Pragathi Grameena Bank','Arunachal Pradesh Rural Bank','Assam Gramin Vikash Bank','Bangiya Gramin Vikash Bank','Baroda Gujarat Gramin Bank','Baroda Rajasthan Kshetriya Gramin Bank','Baroda UP Gramin Bank','Bihar Gramin Bank','Central Madhya Pradesh Gramin Bank','Chaitanya Godavari Grameena Bank','Chhattisgarh Rajya Gramin Bank','Dena Gujarat Gramin Bank','Ellaquai Dehati Bank','Gramin Bank of Aryavart','Himachal Pradesh Gramin Bank','JK Grameen Bank','Jharkhand Gramin Bank','Karnataka Vikas Grameena Bank'
  ,'Kashi Gomti Samyut Gramin Bank','Kaveri Grameena Bank','Kerala Gramin Bank','Langpi Dehangi Rural Bank','Madhyanchal Gramin Bank','Madhya Bihar Gramin Bank','Maharashtra Gramin Bank','Malwa Gramin Bank','Manipur Rural Bank','Meghalaya Rural Bank','Mizoram Rural Bank','Nagaland Rural Bank','Narmada Jhabua Gramin Bank','Odisha Gramya Bank','Pallavan Grama Bank','Pandyan Grama Bank','Paschim Banga Gramin Bank','Pragathi Krishna Gramin Bank','Prathama Bank','Puduvai Bharthiar Grama Bank','Punjab Gramin Bank','Purvanchal Bank','Rajasthan Marudhara Gramin Bank','Saptagiri Grameena Bank','Sarva Haryana Gramin Bank','Sarva UP Gramin Bank','Saurashtra Gramin Bank','Sutlej Gramin Bank','Telangana Grameena Bank','Tripura Gramin Bank','Utkal Grameen Bank','Uttar Banga Kshetriya Gramin Bank','Uttar Bihar Gramin Bank','Uttarakhand Gramin Bank','Vananchal Gramin Bank','Vvalueharbha Konkan Gramin Bank','JK Bank Ltd.','Paytm Payments Bank','Shree Kadi Nagarik Sahakari Bank Ltd.','TJSB Sahakari Bank Ltd.','Pavana Sahakari Bank Ltd.','Thane Bharat Sahakari Bank Ltd.','The Citizen Co-Operative Bank Ltd.','Standard Chartered','Cosmos Bank','Zila Sahkari Bank Ltd.','Dino Bank Ltd.','Fino Payments Bank Ltd.','Cathooptionc Syrian Bank optionmited','Coastal Local Area Bank optionmited','Subhadra Local Area Bank Ltd.','Krishna Bhima Samruddhi Local Area Bank Ltd.','GS Mahanagar Co-op Bank Ltd','Shri Chhatrapati Rajarshi Shahu Urban Co-Operative Bank Ltd','Dakshin Bihar Gramin Bank'];
  list_to_show: any = this.list_original;
  selected_index = -1;
  searchQuery: any;

  show_list = true;
  constructor(
    public goform: AddBeneficiaryPage,
    public modalController2: ModalController,
    public router: Router,
  ) {
  }

  onCancel(val) {
    this.show_list = false;
  }

  click_bar() {
    this.show_list = true;
  }

  click_item(val)
  {
    this.modalController2.dismiss();
    
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(val)
        }
      };
      
      this.router.navigate(['dashboard/add-beneficiary'], navigationExtras);
    
  }

  change_query(query)
  {
      let k = 0;
      this.list_to_show = [];
      for (let i = 0 ; i < this.list_original.length; i++)
      {
          if (this.list_original[i].toUpperCase().includes(query.toUpperCase()))
          {
              this.list_to_show[k] =  this.list_original[i];
              k += 1;
          }
      }
  }

}
