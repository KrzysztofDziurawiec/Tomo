import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title = 'Contact us';
  isHome = false;
  
  constructor(private router:Router) { 
       if (this.router.url.toLowerCase().toString().includes("home")){
      this.isHome=true;
      console.log("THIS IS ROUTER "+this.router.url.toString());
    }
  }

  ngOnInit() {

  }

}
