import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryListComponent } from '../inquiry-list/inquiry-list.component';
import { InquiryFormComponent } from '../inquiry-form/inquiry-form.component';

@Component({
  selector: 'app-inquiries',
  standalone: true,
  imports: [CommonModule, InquiryListComponent, InquiryFormComponent],
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent {
  @ViewChild(InquiryListComponent) inquiryList!: InquiryListComponent;
  
  showAddForm: boolean = false;

  onAddInquiry(): void {
    this.showAddForm = true;
  }

  onCloseForm(): void {
    this.showAddForm = false;
  }

  onFormSubmitted(): void {
    this.inquiryList.loadInquiries();
  }
}