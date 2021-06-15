import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ExaminationService, ResultService } from '../core/data-service';
import { Examination } from '../core/model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  isLoading: boolean = true;
  resultForm: FormGroup;
  examination: object;
  result: object;


  constructor(private fb: FormBuilder,
    private examinationService: ExaminationService,
    private resultService: ResultService) { }

  ngOnInit(): void {
    this.examinationService.getExamination()
    .subscribe(res => {
      this.examination = res;
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    }); 
    this.resultForm = this.fb.group({
      examination: [null,
        [Validators.required]
      ],
      email: [null,
        [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ]
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onSubmit() {
    this.resultService.postResult(this.resultForm.value).subscribe(res => {
      this.result = res;
      console.log(res)
    }, (error) => {
      console.log(`THis is the error: ${error}`)
    }); 
   }

}
