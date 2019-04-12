import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  adminCustomer={email:'', password:''}
  adminCustomers=[];
userName:any;
password:any;
  constructor(private route:ActivatedRoute, private router : Router, public alertController: AlertController, private movieService: MovieService) { }
  ngOnInit() {
    this.movieService.getRemoteAdminCustomers().subscribe((result) => {this.adminCustomers = result;});
  }
  login(adminCustomer){
    console.log(adminCustomer.email);
    for(var i = 0; i< this.adminCustomers.length; i++){
      if((this.adminCustomers[i].email === adminCustomer.email) && (this.adminCustomers[i].password=== adminCustomer.password)){
        console.log('logged in');
        this.router.navigate(['/tabs/tab1']);
      }  
      // else{ 
      //   this.router.navigate(['/oops']);
      // }
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Please Sign up',
      message: 'Either username or password is incorrect / You are not a existing customer. Please Sign up',
      buttons: ['OK']
    });
    await alert.present();
  }
}
