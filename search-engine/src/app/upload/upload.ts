import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';
import { Api } from '../service/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.html',
  styleUrl: './upload.css'
})
export class Upload implements OnInit {
  form!: FormGroup
  imageData: any
  submitted: boolean = false

  constructor(private apiService: Api, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      studentId: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      course: ['', Validators.required],
      duration: ['', Validators.required],
      passingYear: ['', Validators.required],
      image: [null,Validators.required]
    })
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    // Only allow images
    const allowedMimeType = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedMimeType.includes(file.type)) return;

    // Preview
    const reader = new FileReader();
    reader.onload = () => this.imageData = reader.result as string;
    reader.readAsDataURL(file);

    // Patch the form manually
    this.form.get('image')?.setValue(file);
    this.form.get('image')?.updateValueAndValidity();
  }

  onSubmit(){
    const studentFormData = new FormData()
    Object.keys(this.studentForm).map((key)=>{
      studentFormData.append(key, this.studentForm[key].value)
    })
    this.addStudent(studentFormData)
  }

  addStudent(studentData:FormData){
    this.apiService.addStudent(studentData).subscribe((data:any)=> {
      console.log(data)
      this.form.reset()
      this.imageData = null
      this.submitted = !this.studentForm
    })
  }

  get studentForm(){
    return this.form.controls
  }
}
