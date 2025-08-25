import { Component } from '@angular/core';
import { InquiriesComponent } from './components/inquiries/inquiries.component';

@Component({
  selector: 'app-root',
  imports: [InquiriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-client';
}
