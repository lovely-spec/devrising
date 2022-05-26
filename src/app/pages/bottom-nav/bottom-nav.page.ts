import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QuickLinksPage } from '../home/quick-links/quick-links.page';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.page.html',
})
export class BottomNavPage implements OnInit {
  url:boolean;
  constructor(
    public provider : ApihelperProvider,
    private router: Router,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  available_soon(){
    this.provider.show_alert('This Feature is not available yet!')
  }transaction(){
    this.router.navigate(['/dashboard/transaction']);
  }
  async initModal() {
    const modal = await this.modalCtrl.create({
      component: QuickLinksPage,
      componentProps: {
      }
    });
    console.log(modal);
    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    await modal.present();
  }  
}
