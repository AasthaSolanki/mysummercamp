import { Component, OnInit } from '@angular/core';
import { Input} from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import {EnrollService} from "../../enroll.service";
// import { EnrollService } from "../../enroll.service";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  enroll=[];

  public EnrollForm = this._formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Course:['', Validators.required]
  });
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
     private enrollservice: EnrollService
  ) {

  }
@Input() public details:any;


  ngOnInit() {
    this.enrollservice.getCourses().subscribe((value => {
      console.log("----",value);
    }))
  }

}
