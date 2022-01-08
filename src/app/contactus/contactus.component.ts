import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReachUsService } from './../core/data-service';
import { AlertType, ReachUs } from './../core/model';
import { NotificationService } from '../core/system-service/notification.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  isLoading = true;
  contactUs: FormGroup = ReachUs[''];

  constructor(private fb: FormBuilder,
    private reachusService: ReachUsService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.contactUs = this.fb.group({
      name: ['',
        [Validators.required, Validators.minLength(3)]
      ],
      email: ['',
        [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ],
      message: ['',
        [Validators.required]
      ]
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  get name() {
    return this.contactUs.get('name');
  }

  onSubmit() {
    this.reachusService.postReachus(this.contactUs.value)
      .subscribe((result: any) => {
        if (result.message) {
          this.notificationService.show(AlertType.Success, 'We heard you 🙂🙂🙂')
          return;
        }
        this.notificationService.show(AlertType.Warning, 'Something doesn\'t look right');
      }, (error) => {
        this.notificationService.show(AlertType.Error, 'We are afraid, something is not right with our server 😨😨😨.');
      });
  }
}
