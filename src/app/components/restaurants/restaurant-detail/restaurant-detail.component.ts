import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../restaurant/restaurant.model';

import {RestaurantsService} from '../restaurants.service';
@Component({
    selector: 'lacc-restaurant-detail',
    templateUrl: './restaurant-detail.component.html',
    styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
    restaurant:Restaurant;
    constructor(private route:ActivatedRoute, private restaurantService:RestaurantsService) {
    }

    ngOnInit() {
        console.log(this.route.params);
        this.restaurantService.getRestaurantById(this.route.snapshot.paramMap.get('id')).subscribe(
            response => {
                if(response.success)
                {
                    console.log(response);
                    
                    this.restaurant = response.data;
                    
                }
            }
        )
        console.log(this.restaurant);
        
        
    }

}
