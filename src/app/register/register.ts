import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
// Extra Material Components (+3 required)
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  address: string = '';
  birthDate!: Date;
  angularSkillLevel: number = 5;
  minSkillLevel: number = 1;
  maxSkillLevel: number = 10;
  country: string = '';
  submitted: boolean = false;
  hidePassword: boolean = true;

  interests: string[] = ['Web Development', 'Mobile', 'UI/UX', 'Backend', 'DevOps'];
  selectedInterests: string[] = [];

  countries: string[] = [
    'Philippines', 'United States', 'Japan', 'South Korea',
    'Australia', 'Canada', 'United Kingdom', 'Germany'
  ];

  formdata = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    country: new FormControl('', [Validators.required]),
    angularSkillLevel: new FormControl(5),
    agreeToTerms: new FormControl(false, [Validators.requiredTrue])
  });

  toggleInterest(interest: string): void {
    const idx = this.selectedInterests.indexOf(interest);
    if (idx >= 0) {
      this.selectedInterests.splice(idx, 1);
    } else {
      this.selectedInterests.push(interest);
    }
  }

  isSelected(interest: string): boolean {
    return this.selectedInterests.includes(interest);
  }

  onClickSubmit(data: any) {
    this.submitted = true;
    this.userName = data.userName ?? '';
    this.email = data.email ?? '';
    this.password = data.password ?? '';
    this.gender = data.gender ?? '';
    this.address = data.address ?? '';
    this.birthDate = data.birthDate;
    this.country = data.country ?? '';
    this.angularSkillLevel = data.angularSkillLevel ?? 5;

    if (this.formdata.valid) {
      console.log('Form Submitted Successfully!', this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}