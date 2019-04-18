import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private num: number;
private position: number;
  constructor() { }
data={
    courses:[
      {
        name:'Java',
        desc: 'A general based very popular programming language.',
        duration: '1 month',
        days: '31',
        coach: 'Praveen',
        fees: '5000',
        slot:  '9:00-1:00 pm',
        students: '25',
        available:'10'
      },
      {
        name:'Angular',
        desc: 'web development platform',
        duration: '1 month',
        days: '3',
        coach: 'tara',
        fees: '3000',
        slot:  '3:00-5:00 pm',
        students: '30',
        available:'6'
      },
      {
        name:'C++',
        desc: 'Object Oriented Programming.',
        duration: '1 month 5 days',
        days: '35',
        coach: 'prabhakar',
        fees: '3500',
        slot:  '1:00-3:00 pm',
        students: '35',
        available:'7'
      }
    ]
}
  public details:any;
  courses = 'Courses';

  Selectcourse(coursedata){
    this.details=coursedata;
  }

  validateData(position : number){
    this.position = position;

  }
  ngOnInit() {
  }

}
