import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/entities/Customer';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  serverUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }


  getCustomers():Observable<Customer[]>
  {
    console.log(this.http.get<Customer>(this.serverUrl + "customers"));
    return this.http.get<Customer[]>(this.serverUrl + "customers");
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.serverUrl + "customers/getCustomer/" + id);
  }



}
