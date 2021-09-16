import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  dato: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params=>{

      if(this.router.getCurrentNavigation().extras.state){

        this.dato=this.router.getCurrentNavigation().extras.state.user;

        console.log(this.dato)

      }else{this.router.navigate(["/login"])}
    });
  }
  
  ngOnInit(){

  }
}
