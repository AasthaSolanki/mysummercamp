import { Component, OnInit } from '@angular/core';
// import { Input} from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import {EnrollService} from "../../enroll.service";
import { ActivatedRoute,Params } from "@angular/router";

// import { EnrollService } from "../../enroll.service";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  // enroll=[];
public details:any;
enrollform:FormGroup;
submitted=false;
private enrolldata: any;


  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
     private service: EnrollService,
    private route: ActivatedRoute
  ) {

  }
// @Input() public details:any;


  ngOnInit()
  {
    this.route.queryParams.subscribe(params=>{
      this.details=params;
    })
    this.enrollform=this._formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Course:['', Validators.required]
    });
  }

  onsubmit(value){
    this.submitted=true;
    this.enrolldata=value
    if(this.enrollform.invalid){
      return;
    }
    else if ((this.enrollform.value.course.toLocaleLowerCase()).localeCompare(this.details.name.toLocaleLowerCase()) == 0) {
      this.postStudentDetails(this.enrolldata);
      console.log(this.enrolldata);
      alert(value.firstName + "  Enrolled successfully");
      location.reload();
    }
    else {
      alert("Atleast one course must be selected.");
    }
  }
  postStudentDetails(formdata){
    this.service.PostEnrollDetails(formdata).subscribe(clients=>{
      console.log(clients);
    });
  }

}
