import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

=======
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReachUsService } from './../core/data-service'
import { ReachUs } from './../core/model'
>>>>>>> develop

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  isLoading: boolean = true;
  contactUs: FormGroup = ReachUs['']; 

<<<<<<< HEAD
  contactUs: any; 

 
  constructor(private fb: FormBuilder) { }
=======
  constructor(private fb: FormBuilder,
     private reachusService: ReachUsService) { }
>>>>>>> develop

  ngOnInit(): void {
    this.contactUs = this.fb.group({
      name: ['',
        [Validators.required, Validators.minLength(3)]
      ],
      email: ['',
        [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
<<<<<<< HEAD
      standard: ['',
        [Validators.required]
      ],
      message: ['',
        [Validators.required]
      ]
    })
=======
      message: ['',
        [Validators.required]
      ]
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
>>>>>>> develop
  }

  get name() {
    return this.contactUs.get('name');
  }

  onSubmit() {
<<<<<<< HEAD
    console.warn(this.contactUs.value);
=======
    this.reachusService.postReachus(this.contactUs.value)
      .subscribe((result) => {
        console.log(result)
      }, (error) => {
        console.log(error)
      })
>>>>>>> develop
  }
}
