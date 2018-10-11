import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  photos: any[];

  constructor() { }

  ngOnInit() {
    this.photos = [{ name: "../../../assets/1.jpg", title: "Buenavista" },
    { name: "../../../assets/2.jpg", title: "Pijao" },
    { name: "../../../assets/3.jpg", title: "Manizales" },
    { name: "../../../assets/4.jpg", title: "Salento" },
    { name: "../../../assets/5.jpg", title: "Valle del Cocora" },
    { name: "../../../assets/6.jpg", title: "Genova" },
    { name: "../../../assets/7.jpg", title: "Montenegro" },
    { name: "../../../assets/8.jpg", title: "La Tebaida" },
    { name: "../../../assets/9.jpg", title: "Pereira" },
    { name: "../../../assets/11.jpg", title: "Armenia" },
    { name: "../../../assets/13.jpg", title: "Lago Calima" },
    { name: "../../../assets/15.jpg", title: "Hermosos Bosques" }];
  }

}
