import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyInfo = {
    companyLocation: '789 Inner Lane, Holy park, California, USA',
    companyPhoneNumber: {
      phoneNumberOne: '+00 123 456 7890',
      phoneNumberTwo: '+00 987 654 3210',
    },
    companyEmail: {
      emailOne: 'infomailrealar@gmail.com',
      emailTwo: 'supportmail01@gmail.com',
    },
  };
}
