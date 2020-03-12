import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  selector: 'page-foodByCatg',
  templateUrl: 'foodByCatg.html'
})
export class foodByCatgPage {
  foods = []
  j : number = 0
  Lfoods
  
  selectedFoods = []

    constructor( public navCtrl: NavController, private httpClient: HttpClient,public socialSharing: SocialSharing){
      this.loadCatgData();
    }

    loadCatgData(){
      this.httpClient.get("assets/whatsapp.json")
      .subscribe(res =>{
          this.Lfoods=res;
          for (let i = 0; i < 10; i++) {
            this.j++
            this.foods.push( this.Lfoods[this.j] );
          }
          //console.log(this.foods);
      }, error =>{
          console.log(error);
      
      });
    }

    doInfinite(infiniteScroll) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.j++
          this.foods.push( this.Lfoods[this.j] );
        }
  
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    }

    regularShare(index){
      var msg = index.properties.status;
      this.socialSharing.share(msg, null, null, null);
    }

    whatsappShare(index){
      var msg  = index.properties.status;
       this.socialSharing.shareViaWhatsApp(msg, null, null);
     }

     twitterShare(index){
      var msg  = index.properties.status;
      this.socialSharing.shareViaTwitter(msg, null, null);
    }

    facebookShare(index){
      var msg  = index.properties.status;
       this.socialSharing.shareViaFacebook(msg, null, null);
     }
    
}