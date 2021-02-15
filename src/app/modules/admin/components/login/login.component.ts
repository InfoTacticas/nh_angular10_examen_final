import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder/*,
    private suscribeService: SuscribeService*/
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }


  toLogin(loginForm): void {
    return null;
    // this.suscribeService.save(suscribeForm.get('email').value);

    // if (suscribeForm.valid) {
    //  this.suscribeService.save(suscribeForm.get('email').value);
    // }
  }

  get f(): any {
    return this.loginForm.controls;
  }
}
