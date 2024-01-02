import { Component } from '@angular/core';
import { HkService } from '../../hk_Service.service';

@Component({
  selector: 'app-posthkdetails',
  templateUrl: './posthkdetails.component.html',
  styleUrls: ['./posthkdetails.component.css'],
})
export class PosthkdetailsComponent {
  hkData: any = {};
  constructor(private hkService: HkService) {}

  submitHk(hkData: any) {
    this.hkService.postHkdetails(hkData).subscribe(
      (response) => {
        alert('Add successfully');
        console.log('Hk posted successfully!', response);
      },
      (error) => {
        console.error('Error posting Hk:', error);
      }
    );
  }
}
