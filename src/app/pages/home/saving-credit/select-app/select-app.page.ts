import { Component, OnInit } from '@angular/core';
import { PluginsConfig} from '@capacitor/cli';
// import { AnyPlugin } from '@capacitor/core';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;
@Component({
  selector: 'app-select-app',
  templateUrl: './select-app.page.html',
  styleUrls: ['./select-app.page.scss'],
})
export class SelectAppPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async launchApp(){
    var ret = await App.canOpenUrl({ url: 'com.facebook.katana' });
    var retx = await App.openUrl({ url:'com.facebook.katana'});
    console.log('Open url response: ', ret);
  }
}
