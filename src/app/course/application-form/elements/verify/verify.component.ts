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
  
  constructor(private authService: AuthService,
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { email: string, sendEmail: boolean }) {
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
          console.log('Data: ' + data)
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
  }

  verifyOtp() {
    console.log(this.verifyForm)
    this.authService.VerifyOtp(this.verifyForm.value)
      .subscribe(result => {
        console.log(result)
      }, err => console.log(err))
  }

}


