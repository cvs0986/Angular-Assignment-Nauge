import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface ShippingElement {
  name: string;
  type: string;
  address: string;
  city: string;
  country: string;
}

const ELEMENT_DATA: ShippingElement[] = [
  {name: 'Mearsk', type: 'Sea Freight', address: 'Blegdamsvej 3B, 2200', city: 'Copenhagen', country: 'Denmark'},
  {name: 'Mediterranean Shipping Company', type: 'Sea Freight', address: 'Chemin Rieu 12, 1208', city: 'Geneva', country: 'Switzerland'},
  {name: 'FedEx Supply Chain', type: 'Air Freight', address: 'Blegdamsvej 3B, 2200', city: 'Copenhagen', country: 'United States'},
];

@Component({
  selector: 'app-shipping-company-master',
  templateUrl: './shipping-company-master.component.html',
  styleUrls: ['./shipping-company-master.component.scss']
})
export class ShippingCompanyMasterComponent implements OnInit {
  displayedColumns: string[] = ['#', 'name', 'type', 'address', 'city', 'country', 'action'];
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);

  constructor() { }

  ngOnInit(): void {
  }

  removeData(index: number) {
    if (index > -1) this.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Element>(this.data);
  }

  applyFilter(form: NgForm) {
    let filterValue: string = form.value.name;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
