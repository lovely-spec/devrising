import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.page.html',
  styleUrls: ['./quick-links.page.scss'],
})
export class QuickLinksPage implements OnInit {
  @Input() name: string;
  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }
}
