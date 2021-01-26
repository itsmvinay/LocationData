import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  //set area details to false selected intially
  mySelection: boolean = false;
  somevalue: string = "";
  constructor() {
    console.log(this.somevalue);
  }
  //array of objects : containing data related to the location
  locationDetails = [
    { name: "srinagar", population: { total: 5900, men: 4000, women: 1900 }, literacy: "44%" },
    { name: "Hanumantha Nagar", population: { total: 8400, men: 4400, women: 4400 }, literacy: "67%" },
    { name: "N R colony", population: { total: 5000, men: 5000, women: 2000 }, literacy: "64%" },
    { name: "Gandhi Bazar", population: { total: 9300, men: 4300, women: 5000 }, literacy: "94%" },
    { name: "D V G Road", population: { total: 4600, men: 2000, women: 2600 }, literacy: "94%" }
  ];

  //set an area initially as default
  selectedLocation = this.locationDetails[1];

  //event to show details of area on selection of drop down
  onChangeObj(newObj: any) {
    console.log(newObj);
    this.selectedLocation = newObj;
    this.mySelection = true;
  }
}



