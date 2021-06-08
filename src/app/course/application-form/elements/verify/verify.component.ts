import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../../../core/data-service/auth/auth.service';
import { FormBuilder, Validators, FormControl, Form, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {

  public verifyForm: FormGroup;
  public successMessage: object;
  public errorMessage: boolean;
  public isVerified: boolean = false;
  public verifyMessage: object;
  
  constructor(private authService: AuthService,
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { email: string, sendEmail: boolean, submitButton: boolean }) {
  }

  ngOnInit() {
    if (this.data.sendEmail) {
      this.generateOtp();
    };
    this.verifyForm = this.formbuilder.group({
      otp: [null, [Validators.required]],
      email: [this.data.email, [Validators.required]],
    })

  }

  generateOtp() {
    this.authService.generateOtp(this.data.email)
      .subscribe({
        next: data => {
          if (data) {
            this.successMessage = data;
            console.log(this.successMessage)
          }
        },
        error: error => {
          if (error) {
            this.errorMessage = true;
            console.log(this.errorMessage)
          }
        }
      })
  }

  verifyOtp() {
    console.log(this.verifyForm.value)
    this.authService.VerifyOtp(this.verifyForm.value)
      .subscribe({
        next: data => {
          if (data) {
            console.log(this.data.submitButton)
            this.data.submitButton = true;
            console.log(this.data.submitButton)
            this.verifyMessage = data;
            console.log(this.verifyMessage)

          }
        },
        error: error => {
          console.log(error)
        }
      })
  }

}


