import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inquiry } from '../models/inquiry.model';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private apiUrl = 'https://localhost:44312/api/Inquiries';

  constructor(private http: HttpClient) {}

  getInquiries(): Observable<Inquiry[]> {
    return this.http.get<Inquiry[]>(this.apiUrl);
  }

  createInquiry(inquiry: Inquiry): Observable<Inquiry> {
    return this.http.post<Inquiry>(this.apiUrl, inquiry);
  }
}