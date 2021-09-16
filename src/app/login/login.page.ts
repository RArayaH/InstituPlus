import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user={
    usuario:"",     
    password:""
  }
  

  constructor(private router: Router, private loadingCtrl: LoadingController) {}
  
  ngOnInit(){} 
  
  showLoading(){                                 //acá creamos la función

    this.loadingCtrl.create({                    /*usamos el parametro loadingCtrl para crear 
                                                 el objeto "cargando"*/

      message: "Cargando, espere por favor...",  //el mensaje agregado a la espera
      spinner: 'crescent'                        // el tipo de animación a usar

    }).then((loading) =>{

      loading.present();                        //traemos el loading a escena

      setTimeout(() => {                        //indicamos duración de animacion
        loading.dismiss();
      }, 3000)
    })    
  }

  ingresar(){

    this.showLoading();                        //llamamos a la función previo a la transición

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }
  
}
