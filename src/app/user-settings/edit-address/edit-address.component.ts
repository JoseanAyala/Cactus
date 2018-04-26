import {Component, OnInit} from '@angular/core';
import {  NgForOf} from '@angular/common';
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  Address: {
    streetNumber: string,
    streetName: string,
    apartmentName: string,
    city: string,
    state: string,
    zipCode: string
  }[] = [{
      streetNumber: '224',
      streetName: 'MonteCarlos',
      apartmentName: 'Monaco',
      city: 'ti',
      state: 'PR',
      zipCode: '00674'
    },
    {
      streetNumber: '224',
      streetName: 'MonteCarlos',
      apartmentName: 'Monaco',
      city: 'Manati',
      state: 'PR',
      zipCode: '00674'
    }
  ]; // Esto viene de un query


  onDelete(deleteAddress: {
    streetNumber: string,
    streetName: string,
    apartmentName: string,
    city: string,
    state: string,
    zipCode: string
  }) {
    console.log('delete' + deleteAddress.apartmentName + deleteAddress.streetName);
  }
  onUpdate(updateAddress: {
    streetNumber: string,
    streetName: string,
    apartmentName: string,
    city: string,
    state: string,
    zipCode: string
  }) {
    console.log('update' + updateAddress.apartmentName);
  }
  constructor() {}
  ngOnInit() {}

}
