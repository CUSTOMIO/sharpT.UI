import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../../../core/data-service/auth/auth.service';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  public isLoading: boolean = false;

  constructor(private authService: AuthService,
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { email: string, sendEmail: boolean},
    private dialogRef: MatDialogRef<VerifyComponent>) {
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
    this.isLoading = true;
    this.authService.generateOtp(this.data.email)
      .subscribe({
        next: data => {
          if (data) {
            this.successMessage = data;
            this.isLoading = false;
          }
        },
        error: error => {
          if (error) {
            this.errorMessage = true;
            this.isLoading = false;
            console.log(this.errorMessage)
          }
        }
      })
  }

  verifyOtp() {
    this.isLoading = true;
    this.authService.VerifyOtp(this.verifyForm.value)
      .subscribe({
        next: data => {
          if (data) {
            this.verifyMessage = data;
            this.isLoading = false;
          }
        },
        error: error => {
          this.isLoading = false;
          this.errorMessage = true;
        }
      })
    }
    
  closeDialog(){
    this.dialogRef.close({ data: this.verifyMessage })
  }

}


