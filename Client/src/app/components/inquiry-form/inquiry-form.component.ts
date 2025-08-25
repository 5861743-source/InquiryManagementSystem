import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submitted = new EventEmitter<void>();

  inquiryForm: FormGroup;

  constructor(
    private inquiryService: InquiryService,
    private fb: FormBuilder
  ) {
    this.inquiryForm = this.fb.group({
      applicantName: ['', Validators.required],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.inquiryService.createInquiry(this.inquiryForm.value).subscribe({
      next: () => {
        this.submitted.emit();
        this.onClose();
      },
      error: (error) => {
        console.error('Error creating inquiry:', error);
        alert('שגיאה בשליחת הפנייה: ' + error.message);
      }
    });
  }

  onClose(): void {
    this.inquiryForm.reset();
    this.close.emit();
  }
}