import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactUs: any; 

 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactUs = this.fb.group({
      name: ['',
        [Validators.required, Validators.minLength(3)]
      ],
      email: ['',
        [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      standard: ['',
        [Validators.required]
      ],
      message: ['',
        [Validators.required]
      ]
    })
  }

  get name() {
    return this.contactUs.get('name');
  }

  onSubmit() {
    console.warn(this.contactUs.value);
  }
}
