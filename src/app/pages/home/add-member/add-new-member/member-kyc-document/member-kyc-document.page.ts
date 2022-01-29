import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-member-kyc-document',
  templateUrl: './member-kyc-document.page.html',
  styleUrls: ['./member-kyc-document.page.scss'],
})
export class MemberKycDocumentPage implements OnInit {
    images:any = '';
    aadhar_f:string;
    adhar_f_show: string=  "no";
    adhar_b_show: string=  "no";
    selfie_show: string=  "no";
    pan_show: string=  "no";
    sign_show: string=  "no";
    master_satatus: string= "no";
    constructor(private camera: Camera,
       private file: File, 
       private http: HttpClient,
        private webview: WebView,
      private actionSheetController: ActionSheetController, 
      private toastController: ToastController,
      private storage: Storage, 
      private plt: Platform,
       private loadingController: LoadingController,
      private ref: ChangeDetectorRef, 
      private filePath: FilePath,
      public router: Router,
      private provider : ApihelperProvider,
      private SharedService: SharedService) { 
      }
  

      ionViewDidEnter() {
        if (this.adhar_f_show == 'no'){
          this.adhar_f_show = 'yes';
          this.adhar_b_show = 'no';
          this.selfie_show = 'no';
          this.pan_show = 'no';
          this.sign_show = 'no';
        }
      }

    ngOnInit() 
    {
      this.plt.ready().then(() => {
        this.loadStoredImages();
      });
    }
    aadhar(){
      if(this.images){
        this.adhar_f_show = 'no';
      }
    }
    loadStoredImages() {
      var id = this.SharedService.getmid();
      this.storage.get(STORAGE_KEY).then(images => {
        if (images) {
          let arr = JSON.parse(images);
          this.images = '';
          let i = 0;
          for (let img of arr) {
            if(i == 0){
              img = "adhar_f";
            }else if(i == 1){
              img = "adhar_b";
            }else if(i == 2){
              img = "pan";
            }else if(i == 3){
              img = "selfie";
            }else if(i == 4){
              img = "sign";
            }
            let filePath = this.file.dataDirectory + img;
            let resPath = this.pathForImage(filePath);
            this.images.push({ name: img, path: resPath, filePath: filePath });
            i++;
          }
        }
      });
    }
    pathForImage(img) {
      if (img === null) {
        return '';
      } else {
        let converted = this.webview.convertFileSrc(img);
        return converted;
      }
    }
   
    async presentToast(text) {
      const toast = await this.toastController.create({
          message: text,
          position: 'bottom',
          duration: 3000
      });
      toast.present();
    }
  
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
          header: "Select Image source",
          buttons: [{
                  text: 'Load from Library',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                  }
              },
              {
                  text: 'Use Camera',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.CAMERA);
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel'
              }
          ]
      });
      await actionSheet.present();
  }
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
  
    this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });
  
  }
  
  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }
  
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
  }
  
  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        if (!arr) {
            let newImages = [name];
            this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
            arr.push(name);
            this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }
  
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
  
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };
  
        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // trigger change detection cycle
    });
  }
  
  deleteImage(imgEntry, position) {
    this.images.splice(position, 1);
  
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        let filtered = arr.filter(name => name != imgEntry.name);
        this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
  
        var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
  
        this.file.removeFile(correctPath, imgEntry.name).then(res => {
            this.presentToast('File removed.');
        });
    });
    if(imgEntry.name == 'adhar_f'){
      this.adhar_f_show = 'yes';
      this.adhar_b_show = 'no';
      this.selfie_show = 'no';
      this.pan_show = 'no';
      this.sign_show = 'no';
    }else if(imgEntry.name == 'adhar_b'){
      this.adhar_f_show = 'no';
      this.adhar_b_show = 'yes';
      this.selfie_show = 'no';
      this.pan_show = 'no';
      this.sign_show = 'no';
    }else if(imgEntry.name == 'pan'){
      this.adhar_f_show = 'no';
      this.adhar_b_show = 'no';
      this.selfie_show = 'no';
      this.pan_show = 'yes';
      this.sign_show = 'no';
    }else if(imgEntry.name == 'selfie'){
      this.adhar_f_show = 'no';
      this.adhar_b_show = 'no';
      this.selfie_show = 'yes';
      this.pan_show = 'no';
      this.sign_show = 'no';
      
    }else if(imgEntry.name == 'sign'){
      this.adhar_f_show = 'no';
      this.adhar_b_show = 'no';
      this.selfie_show = 'no';
      this.pan_show = 'no';
      this.sign_show = 'yes';
      
    }
  }
  
  startUpload(imgEntry) {
    console.log('sad')
    if(imgEntry.name == 'adhar_f'){

    }else if(imgEntry.name == 'adhar_b'){

    }else if(imgEntry.name == 'pan'){
      
    }else if(imgEntry.name == 'selfie'){
      
    }else if(imgEntry.name == 'sign'){
      
    }
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file))
        })
        .catch(err => {
            this.presentToast('Error while reading file.');
        });
  }
  
  readFile(file: any) {
    console.log('sad1')
    const reader = new FileReader();
    reader.onload = () => {
        const formData = new FormData();
        const imgBlob = new Blob([reader.result], {
            type: file.type
        });
        console.log('sad2',file.name)
        formData.append('file', imgBlob, file.name);
        this.uploadImageData(formData);
    };
    console.log('sad1df')
    reader.readAsArrayBuffer(file);
  }
  
  async uploadImageData(formData: FormData) {
    console.log('sad2')
    console.log('sad3',formData)
    // var member_id = this.SharedService.getmid();
    // this.provider.uploadImages(formData,member_id).subscribe(data=>{
    //   console.log('response',data)
    //   if(data['status'] == true){
    //   }
    // })
      
    const loading = await this.loadingController.create({
        message: 'Uploading image...',
    });
    await loading.present();
  
    this.http.post("http://localhost:8888/upload.php", formData)
        .pipe(
            finalize(() => {
                loading.dismiss();
            })
        )
        .subscribe(res => {
            if (res['success']) {
                this.presentToast('File upload complete.')
            } else {
                this.presentToast('File upload failed.')
            }
        });
  }
  next(){
    let navigationExtras: NavigationExtras = {
    };
    this.router.navigate(['/address-details/kyc/kyc-document/preview'], navigationExtras);
  }
  
  }
  