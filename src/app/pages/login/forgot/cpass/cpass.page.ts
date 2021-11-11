import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-cpass',
  templateUrl: './cpass.page.html',
  styleUrls: ['./cpass.page.scss'],
})
export class CpassPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public platform: Platform
    ) { 
    
  }

  ngOnInit() {
    this.platform.backButton.subscribe(() => {
    this.navCtrl.navigateRoot('/dashboard/home'); 
    })
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
      });
  }

}
