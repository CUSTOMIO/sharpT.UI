import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ReachUsService } from './../core/data-service'
import { ReachUs } from './../core/model'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  isLoading: boolean = true;
  contactUs: any = ReachUs['']; 

  constructor(private fb: FormBuilder,
     private reachusService: ReachUsService) { }

  ngOnInit(): void {
    this.contactUs = this.fb.group({
      name: ['',
        [Validators.required, Validators.minLength(3)]
      ],
      email: ['',
        [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
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
    console.log(this.contactUs)
    this.reachusService.postReachus(this.contactUs.value)
      .subscribe((result) => {
        console.log(result)
      }, (error) => {
        console.log(error)
      })
  }
}
