import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from '../core/data-service';
import { Testimonial } from '../core/model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  
  public isLoading: boolean = true;
  public testimonialForm: FormGroup;
  public testimonial : Testimonial[];
  public apiEndpoint = environment.api_endpoint;

  constructor( private fb : FormBuilder,
               private testimonialService : TestimonialService) { }

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
    })

  }

  onSubmit() {
    this.testimonialService.postTestimonial(this.testimonialForm.value)
    .subscribe(res => {
      console.log(res);
    })
    // console.log('Submitted')
  }
}
