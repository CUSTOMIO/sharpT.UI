import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/data-service/auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  public clicked: boolean = false;


  constructor(private authService: AuthService,
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { email: string, sendEmail: boolean },
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
    //console.log(`function called`);
    this.isLoading = true;

    this.authService.VerifyOtp(this.verifyForm.value)
      .subscribe({
        next: data => {
          this.isLoading = false;
          if (data.message) {
            this.verifyMessage = data;
            this.dialogRef.close({ data: this.verifyMessage });
          }
          if (data.error) {
            this.errorMessage = data.error;
            this.clicked = false;
          }
        },
        error: error => {
          console.log('This is err' + error)
          this.clicked = false;
          this.isLoading = false;
          this.errorMessage = true;
        }
      })
  }

  closeDialog() {
    this.dialogRef.close({ data: '' });
    if (this.verifyMessage !== null) {
      this.dialogRef.close({ data: this.verifyMessage });
    }
  }

}


