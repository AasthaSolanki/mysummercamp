import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import{ Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public RegisterationForm = this._formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
    constructor(
      private _formBuilder: FormBuilder,
      private router: Router
    ) { }

  ngOnInit() {
  }
  whetherToShow()
  {
    if(this.RegisterationForm.get('Password').touched && this.RegisterationForm.get('ConfirmPassword').touched)
    {

      if(this.RegisterationForm.get('ConfirmPassword').value!=this.RegisterationForm.get('Password').value)
      {
        return true;
      }
      return false;

    }
    else{
      return false;
    }
  }
}
