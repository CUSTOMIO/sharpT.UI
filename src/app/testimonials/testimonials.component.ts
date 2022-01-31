import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from '../core/data-service';
import { AlertType, Testimonial } from '../core/model';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../core/system-service/notification.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public isLoading = true;
  public testimonialForm: FormGroup;
  public testimonial: Testimonial[];
  public apiEndpoint = environment.api_endpoint;

  constructor(private fb: FormBuilder,
              private testimonialService: TestimonialService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.testimonialForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ],
      review: ['',
        [Validators.required]
      ]
    });
    this.testimonialService.getTestimonial()
      .subscribe((res: Testimonial[]) => {
        this.testimonial = res;
      });

  }

  onSubmit() {
    this.testimonialService.postTestimonial(this.testimonialForm.value)
      .subscribe((res: any) => {
        if (res.message === true) {
          return this.notificationService.show(AlertType.Success, 'Thank you for taking your time and writing about');
        }
        return this.notificationService.show(AlertType.Warning, res.message);
      });
  }
}
