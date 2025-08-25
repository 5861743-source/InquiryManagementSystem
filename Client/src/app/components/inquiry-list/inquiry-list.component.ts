import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inquiry } from '../../models/inquiry.model';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-inquiry-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css']
})
export class InquiryListComponent implements OnInit {
  @Output() addInquiry = new EventEmitter<void>();
  
  inquiries: Inquiry[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private inquiryService: InquiryService) {}

  ngOnInit(): void {
    this.loadInquiries();
  }

  loadInquiries(): void {
    this.inquiryService.getInquiries().subscribe({
      next: (inquiries) => this.inquiries = inquiries,
      error: (error) => console.error('Error loading inquiries:', error)
    });
  }

  onAddInquiry(): void {
    this.addInquiry.emit();
  }

  sort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.inquiries.sort((a, b) => {
      let valueA: any = a[column as keyof Inquiry];
      let valueB: any = b[column as keyof Inquiry];

      if (column === 'submissionDate') {
        valueA = new Date(valueA || 0);
        valueB = new Date(valueB || 0);
      } else {
        valueA = valueA?.toString().toLowerCase() || '';
        valueB = valueB?.toString().toLowerCase() || '';
      }

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return 'bi-arrow-down-up';
    return this.sortDirection === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
  }
}