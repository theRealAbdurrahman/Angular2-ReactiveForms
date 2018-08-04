import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent  implements OnInit{
    customerForm: FormGroup;
    customer: Customer= new Customer();

    ngOnInit() {
        this.customerForm = new FormGroup({
            firstName : new FormControl(),
            lastName : new FormControl(),
            email : new FormControl(),
            sendCatalog : new FormControl(true),
        })
    }
    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
    setDefaultData(){
        this.customerForm.setValue({
            firstName:"bedo",
            lastName:"maged",
            email:"bedo@maged.com",
            sendCatalog: true,
        })
    }
    setSomeData(){
        this.customerForm.patchValue({
            firstName:"bedo",
            lastName:"maged",
        })
    }
 } 
