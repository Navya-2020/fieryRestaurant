import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { Review } from './restaurant-detail/reviews/reviews.model';
import { RESTAURANT_API } from '../../app.constants';

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) {
    }

    getAllRestaurants(): Observable<{
        success: boolean,
        count: number,
        data: Restaurant[]
    }> {
        return this.http.get<{
            success: boolean,
            count: number,
            data: Restaurant[]
        }>(`${RESTAURANT_API}/api/v1/restaurants`);
    }
    getRestaurantById(id: string): Observable<{
        success: boolean,
        count: number,
        data: Restaurant
    }> {
        return this.http.get<{
            success: boolean,
            count: number,
            data: Restaurant
        }>(`${RESTAURANT_API}/api/v1/restaurants/${id}`);
    }
    getMenuOfRestaurant(id: string): Observable<
    {
        success: boolean,
        count: number,
        data: MenuItem[] 
    }> {
        return this.http.get<{success: boolean,
            count: number,
            data: MenuItem[]}>(`${RESTAURANT_API}/api/v1/menuitems/${id}`);
    }


    getReviewsOfRestaurants(id: string): Observable<Review> {
        return this.http.get<Review>(`${RESTAURANT_API}/restaurants/${id}/reviews`);
    }
}
