import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private router: Router, private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateFirstName(): boolean {
    if (!this.firstName) {
      return false;
    }
    return this.firstName.valid || this.firstName.touched;
  }

  validateLastName(): boolean {
    if (!this.lastName) {
      return false;
    }
    return this.lastName.valid || this.lastName.touched;
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
      console.log('saveProfile: ' + formValues.firstName + ' ' + formValues.lastName);
      this.toasterService.success('Profile Saved');
    }
  }

  logout(): void {

  }
}
