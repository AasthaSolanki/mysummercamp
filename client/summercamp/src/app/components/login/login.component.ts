import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    this.login.valueChanges.subscribe(d=>console.log(this.login))
  }
  constructor(private _formBuilder: FormBuilder) { }

  public login = this._formBuilder.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(6)]]
  })


}
