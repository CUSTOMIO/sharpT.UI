import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/data-service/auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../core/system-service/notification.service';
import { AlertType } from '../core/model';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {

  public verifyForm: FormGroup;
  public emailSend: boolean = false;
  public error: boolean;
  public errorMessage: string;
  public isVerified: boolean = false;
  public verified: boolean = false;
  public isLoading: boolean = false;


  constructor(private authService: AuthService,
              private formbuilder: FormBuilder,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: { email: string, sendEmail: boolean },
              private dialogRef: MatDialogRef<VerifyComponent>) { }

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
    this.error = false;
    this.isLoading = true;

    this.authService.generateOtp(this.data.email)
      .subscribe({
        next: (data: any) => {
          if (data.message) {
            this.emailSend = data.message;
          } else {
            this.error = true;
            this.errorMessage = 'Check your email and try again.'
          }
            this.isLoading = false;
        },
        error: error => {
          if (error) {
            this.error = true;
            this.errorMessage = 'Oops, something is not right with our servers!!'
          }
            this.isLoading = false;
        }
      })
  }

  verifyOtp() {
    this.isLoading = true;
    this.error = false;

    this.authService.VerifyOtp(this.verifyForm.value)
      .subscribe({
        next: data => {
          this.isLoading = false;
          if (data.message) {
            this.verified = data.message;
            this.closeDialog();
            return;
          }
          this.error = true;
          this.errorMessage = 'Check your otp once again'
        },
        error: error => {
          this.error = true;
          this.errorMessage = 'Oops, something is not right with our servers!!'
          this.isLoading = false;
        }
      })
  }

  closeDialog(): void {
    if (this.verified) {
      this.dialogRef.close({
        data: { otp: this.verifyForm.controls.otp.value, message: this.emailSend }
      });
      this.notificationService.show(AlertType.Success, 'Your Email is verified');
    }
    else {
      this.notificationService.show(AlertType.Warning, 'Your Email is NOT verified');
      this.dialogRef.close({ data: '' });
    }
  }
}


