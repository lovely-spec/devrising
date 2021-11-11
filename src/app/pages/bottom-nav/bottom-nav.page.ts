import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.page.html',
})
export class BottomNavPage implements OnInit {

  constructor(
    public provider : ApihelperProvider,
  ) { }

  ngOnInit() {
  }
  available_soon(){
    this.provider.show_alert('This Feature is not available yet!')
  }
}
