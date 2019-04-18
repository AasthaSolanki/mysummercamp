import { Component, OnInit } from '@angular/core';
import { Input} from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  public EnrollForm = this._formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required]
  });
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
  ) { }
@Input() public details:any;
  ngOnInit() {
  }

}
