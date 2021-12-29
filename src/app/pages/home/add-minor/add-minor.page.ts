import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import {SharedService } from '../add-member/shared.service';

@Component({
  selector: 'app-add-minor',
  templateUrl: './add-minor.page.html',
  styleUrls: ['./add-minor.page.scss'],
})
export class AddMinorPage implements OnInit {
  father_name:string;
  first_name:string;
  last_name:string;
  d_o_b:string;
  gender:string;
  address:string;
  aadhar_no:string;
  constructor(
    private storage: Storage, 
    public router: Router,
    public shared:SharedService,
    private provider : ApihelperProvider
  ) { }

  ngOnInit() {
    var fd = this.shared.getfd();
    // console.log(fd);
  }
  add_minor(){
    var fd = this.shared.getfd();
    var rd = this.shared.getrd();
  var father_name = this.father_name;
  var first_name = this.first_name;
  var last_name = this.last_name;
  var d_o_b = this.d_o_b;
  var gender = this.gender;
  var address = this.address;
  var aadhar_no = this.aadhar_no;
  var tittle = '';
  var re = /^\d{12}(?:\s*,\s*\d{12)*$/;
    console.log(this.aadhar_no,this.d_o_b,this.gender,this.first_name,this.last_name,this.address,this.father_name)
    
  if (father_name==null||father_name==''|| aadhar_no==null|| aadhar_no==''||first_name==null||first_name==''||d_o_b==null||d_o_b==''||gender==null||gender==''||address==null||address==''||last_name==null||last_name==''){
          this.provider.show_alert('Please fill all details')
        
          if (!re.test(aadhar_no)){
            this.provider.show_alert('Please fill correct Aadhar No')
          }
      }else{
        if (gender == 'male'){

        tittle = 'mr'
        console.log(tittle)
      }else{
        tittle = "ms"
      }
        
        this.provider.add_minor(father_name,first_name,last_name,d_o_b,gender,address,tittle,aadhar_no).subscribe(data=>{
        console.log('response',data)
        if(data['status'] == true){
          console.log('hua')
          if (fd == true){
          let navigationExtras: NavigationExtras = {
            
          };
          this.router.navigate(['/dashboard/home/fdview/add-new-fd'], navigationExtras);}
          if (rd== true){
            let navigationExtras: NavigationExtras = {
              
            };
            this.router.navigate(['/dashboard/home/rdview/add-new-rd'], navigationExtras);}

      }else{
      this.provider.show_alert(data['message'])
    }
      })

        }
  
  }
  next(){
    var fd = this.shared.getfd();
    if (fd == true){
      let navigationExtras: NavigationExtras = {
        
      };
      this.router.navigate(['/dashboard/home/fdview/add-new-fd'], navigationExtras);}
  }
  back(){
    var fd = this.shared.getfd();
    if (fd == true){
      let navigationExtras: NavigationExtras = {
        
      };
      this.router.navigate(['/dashboard/home/fdview/add-new-fd'], navigationExtras);}
      else{
        let navigationExtras: NavigationExtras = {
        
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd'], navigationExtras);}
      
  }

}
