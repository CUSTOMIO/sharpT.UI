import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { AuthService } from '../../../../core/data-service/auth/auth.service';

@Component({
  selector: '[formGroup] app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ElementsContactDetails implements OnInit {

  public appForm: FormGroup;

  constructor(private controlContainer: ControlContainer,
    private authService: AuthService) { }

  ngOnInit() {
    this.appForm = this.controlContainer.control as FormGroup;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.appForm.controls[controlName].hasError(errorName);
  }
  generateOtp() {
    if (this.appForm.value.email) {
      this.authService.generateOtp(this.appForm.value.email)
        .subscribe((result) => {
          console.log(result)
        }, (error) => {
          console.log(error)
        })
    }
  }
}
