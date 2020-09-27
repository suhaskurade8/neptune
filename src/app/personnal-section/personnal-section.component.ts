import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnal-section',
  templateUrl: './personnal-section.component.html',
  styleUrls: ['./personnal-section.component.css']
})
export class PersonnalSectionComponent implements OnInit {

  _personnalDetails = [
    { field: "Full Name", data: "Suhas Krishna Kurade" },
    { field: "Date of Birth", data: "31st March 1994" },
    { field: "Gender", data: "Male" },
    { field: "Religon", data: "Hindu" },
    { field: "Maritial Status", data: "Un-married" },
    { field: "Mobile No.", data: "9637423646" },
    { field: "Email Address", data: "suhaskurade8@gmail.cim" },
    { field: "Address", data: "Ambegaon,Pune" },
    { field: "Languages known", data: "Marathi, Hindi & English" },    
    { field: "Hobby", data: "Playing cricker, playing chess" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
