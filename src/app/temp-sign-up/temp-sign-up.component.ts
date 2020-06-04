import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-temp-sign-up',
  templateUrl: './temp-sign-up.component.html',
  styleUrls: ['./temp-sign-up.component.css']
})
export class TempSignUpComponent implements OnInit {

  constructor() { }

  SignUpForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });
  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.SignUpForm.value);
  }
}
