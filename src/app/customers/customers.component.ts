import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/entities/Customer';
import { ServerService } from 'src/services/server.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getCustomers().subscribe(customers =>{
      this.customers = customers;
    });

    this.serverService.getCustomer(2).subscribe(customers=>{
      console.log(customers);
    });
  }

}
