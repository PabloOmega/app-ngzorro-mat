import { Component } from '@angular/core';
import { PaypalService } from '../../services/paypal/paypal.service';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {

  constructor(private paypalService: PaypalService) {}

  onClickPaypal(): void {
  //   this.paypalService.getAccessToken()
  //     .subscribe((response) => {
  //       const accessToken = response.access_token;
  //       console.log(accessToken);
  //       this.paypalService.createWebProfile(accessToken)
  //         .subscribe((response) => {
  //           this.paypalService.createPayment(
  //             accessToken, 
  //             response.id, 
  //             "http://localhost:4200/login", 
  //             "http://localhost:4200/users"
  //           )
  //             .subscribe((response) => {
  //               console.log(response);
  //               window.location.href = response.links[1].href;
  //             });
  //         });
  //     });
  }
}
