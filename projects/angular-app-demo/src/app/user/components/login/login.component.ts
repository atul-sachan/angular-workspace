import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;

  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login(): void {
    if (this.loginForm.valid && this.loginForm.value['email'] !== 'abc@gmail.com') {
      this.router.navigate(['/app', 'events']);
    } else {
      this.toastr.error('Hello world!', 'Toastr fun!');
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }

}
