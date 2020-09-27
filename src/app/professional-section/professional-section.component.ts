import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-section',
  templateUrl: './professional-section.component.html',
  styleUrls: ['./professional-section.component.css']
})
export class ProfessionalSectionComponent implements OnInit {

  _professionalDetails = [
    { field: "Education", data: "BE CSE" },
    { field: "Year of Passing", data: "2016" },
    { field: "Degree Aggregate", data: "72.81%" },
    { field: "Current Company", data: "Interview mocha" },
    { field: "Previous Company", data: "iSuraksha Solutions Pvt. Ltd." },
    { field: "Total Experience", data: "3.6 years" },
    { field: "Skills Known", data: "Angular 9, Javascript,HTML,CSS & Web API" },
    { field: "Notice Period", data: "2 months" },    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
