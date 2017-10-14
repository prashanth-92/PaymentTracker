import { Component } from '@angular/core';

/**
 * Generated class for the PaymentDetailsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment-details-list',
  templateUrl: 'payment-details-list.html'
})
export class PaymentDetailsListComponent {
  items = [
    {
      title: 'INR 100',
      icon: 'calendar',
      time: {subtitle: '4/16/2013 05:00 PM'}
    },
    {
      title: '',
      content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'calendar',
      time: {subtitle: 'January', title: '29'}
    },
    {
      title: '',
      content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'calendar',
      time: {title: 'Short Text'}
    }
  ]
  constructor() {
  }

}
