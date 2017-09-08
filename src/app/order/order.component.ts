import {Component, OnInit, Input} from '@angular/core';
import {OrderService} from "./orderservice";
import {FormGroup} from "@angular/forms";
import {Order} from "./Order";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


    name: any;
    quantity: any

    patientForm: FormGroup;

    @Input() order: OrderComponent;
    private hmos: Order[];
    private patientUid: number;
    private showForm: boolean = false;

    constructor(private orderService: OrderService) {


    }

    ngOnInit() {


    }


    createOrder() {
        

        var order = {
            name: this.name,
            price: this.quantity

        };

        this.orderService.createOrder(order);
        alert("Order Added Successfully");
        location.reload();
    }


}
