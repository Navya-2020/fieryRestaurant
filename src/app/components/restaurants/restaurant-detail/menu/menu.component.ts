import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {MenuItem} from '../menu-item/menu-item.model';
//import {RestaurantsService} from '../../restaurants.service';
import {RestaurantsService} from '../../restaurants.service';

@Component({
    selector: 'lacc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    // menu: Observable<MenuItem[]>;
    menu: MenuItem[];

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.restaurantService.getMenuOfRestaurant(this.route.parent.snapshot.paramMap.get('id')).subscribe(
            response =>{
                if(response.success)
                {
                    console.log(response);
                    
                    this.menu = response.data.menuItems;
                    
                }
        )
    }

}
