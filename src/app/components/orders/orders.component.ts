import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Orders } from './orders.model';

@Component({
  selector: 'lacc-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Orders[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.ordersService.getAllOrders().subscribe(
      response => {
        if(response.success)
        {
          console.log(response);
          this.orders = response.data;
        }
      }

    )
  }

}
